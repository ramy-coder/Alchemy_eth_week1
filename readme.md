## ECDSA Node

This project is an example of using a client and server to facilitate transfers between different addresses. 

We have implemented Public Key Cryptography. By using Elliptic Curve Digital Signatures, we can make it so the server only allows transfers that have been signed for by the person who owns the associated address.

 
### Client

The client folder contains a [react app](https://reactjs.org/) using [vite](https://vitejs.dev/). To get started, follow these steps:

1. Open up a terminal in the `/client` folder
2. Run `npm install` to install all the depedencies
3. Run `npm run dev` to start the application 
4. Now you should be able to visit the app at http://127.0.0.1:5173/

The Client takes in the private key of the user and the same is sent to the server. The balance of the client as stored in the server is displayed here.
Transfer from one user to other happens depending on the authentication from the server.

### Server

The server folder contains a node.js server using [express](https://expressjs.com/). To run the server, follow these steps:

1. Open a terminal within the `/server` folder 
2. Run `npm install` to install all the depedencies 
3. Run `node index` to start the server 

The application should connect to the default server port (3042) automatically! 

The server takes in the private key and authenticates the transaction. 

![image](https://github.com/ramy-coder/Alchemy_eth_week1/assets/34714019/f8271745-740f-42a5-8788-2098d2644dea)

