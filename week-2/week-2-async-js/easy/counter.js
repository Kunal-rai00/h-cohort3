// const { ethers } = require("ethers");
// require('dotenv').config();

// // Connect to Ethereum mainnet via Infura (or another RPC provider)
// const provider = new ethers.JsonRpcProvider(`https://mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`);

// // Create a wallet instance using your private key
// const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

// // Function to get the balance of an Ethereum address
// function getBalance(address) {
//     return provider.getBalance(address)
//         .then(balance => {
//             console.log(`Balance of ${address}: ${ethers.formatUnits(balance, "ether")} ETH`);
//             return balance; // Return the balance for further use
//         })
//         .catch(error => {
//             console.error("Error getting balance:", error);
//             throw error;
//         });
// }

// // Function to send a transaction from the wallet
// function sendTransaction() {
//     const recipientAddress = "0xRecipientAddressHere"; // Replace with recipient's address
//     const amountInEther = "0.01"; // Amount to send in ETH

//     const tx = {
//         to: recipientAddress,
//         value: ethers.parseUnits(amountInEther, "ether"), // Convert Ether to Wei
//     };

//     return wallet.sendTransaction(tx)
//         .then(txResponse => {
//             console.log(`Transaction sent with hash: ${txResponse.hash}`);
//             return txResponse.wait(); // Wait for the transaction to be mined
//         })
//         .then(txReceipt => {
//             console.log(`Transaction mined in block: ${txReceipt.blockNumber}`);
//             return txReceipt; // Return the receipt for further use
//         })
//         .catch(error => {
//             console.error("Error sending transaction:", error);
//             throw error;
//         });
// }

// // Chain promises to get balance, send transaction, and check balance again
// getBalance(wallet.address)
//     .then((balance) => {
//         console.log(`Initial balance: ${ethers.formatUnits(balance, "ether")} ETH`);
//         return sendTransaction(); // Send transaction after balance check
//     })
//     .then((txReceipt) => {
//         console.log(`Transaction was successfully mined with hash: ${txReceipt.transactionHash}`);
//         return getBalance(wallet.address); // Get balance again after the transaction
//     })
//     .then((balance) => {
//         console.log(`Final balance: ${ethers.formatUnits(balance, "ether")} ETH`);
//     })
//     .catch((error) => {
//         console.error("An error occurred:", error);
//     });
// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

// function counter() {
//     let date = new Date();
//     let hour = date.getHours();
//     let minute = date.getMinutes();
//     let second = date.getSeconds();
  
//     // Format the time to always show two digits (e.g., 08:05:09)
//     let formattedTime = `${hour.toString().padStart(2, "0")}:${minute
//       .toString()
//       .padStart(2, "0")}:${second.toString().padStart(2, "0")}`;
    
//     console.log(formattedTime); // Log the time
//   }
  
//   // Run the function every second
//   setInterval(counter, 1000);

