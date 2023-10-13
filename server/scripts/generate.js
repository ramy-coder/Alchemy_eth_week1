const { secp256k1 } = require("ethereum-cryptography/secp256k1"); //theory : here we are importing a package so no curly braces assumption wrong
const { toHex } = require("ethereum-cryptography/utils"); //theory : here we are importing a function so we have curly braces
const { keccak256 } = require("ethereum-cryptography/keccak.js");

const privateKey = secp256k1.utils.randomPrivateKey();
console.log("Private Key : ", toHex(privateKey));

const publicKey = keccak256(secp256k1.getPublicKey(privateKey));
console.log("Public Key : ", toHex(publicKey));
