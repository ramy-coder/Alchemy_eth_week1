const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;
const { secp256k1 } = require("ethereum-cryptography/secp256k1");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

app.use(cors());
app.use(express.json());

const balances = {
  "0305c51f0aab6c6e32f15b7372593395867002fcfccc62afbbf26a9265d0be51a4": 100,
  "03a1e3148d51421eb7c99f124e3e1c2b188551831bb6991feeaa4d6aae7ab7172e": 50,
  "03ba0532951666bd35c34348aab36f9b6312ae1f7392f1911d7f353bc2b2bfc1c0": 75,
};

app.get("/balance/:privkey", (req, res) => {
  const { privkey } = req.params;
  console.log(privkey);
  const address = toHex(secp256k1.getPublicKey(privkey));
console.log(address);
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", (req, res) => {
  const { sender, recipient, amount } = req.body;

  setInitialBalance(sender);
  setInitialBalance(recipient);

  if (balances[sender] < amount) {
    res.status(400).send({ message: "Not enough funds!" });
  } else {
    balances[sender] -= amount;
    balances[recipient] += amount;
    res.send({ balance: balances[sender] });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}
