import Web3 from "web3";
import {abi} from "./contract";
import {chains} from "./chains"
import dotenv from 'dotenv';
dotenv.config();

const selected_chain = chains.nebula;

var web3 = new Web3(selected_chain.chainInfo.testnet.rpcUrl);

const pk = process.env.PRIVATE_KEY || "";

const accountAddress = web3.eth.accounts.privateKeyToAccount(`0x${pk}`)

const contract_address = selected_chain.chainInfo.testnet.contracts[0].address;

const contract = new web3.eth.Contract(abi, contract_address);

const functionData = contract.methods.mintTest(accountAddress.address).encodeABI();

// Send transaction to smart contract to update message
async function ContractSendTx() {
    web3.eth.accounts.signTransaction( 
        {
          from: accountAddress.address,
          to: contract_address,
          gas: 100000,
          gasPrice: 100000,
          data: functionData,
        }, 
        pk)
        .then((signedTransaction) => {
          return web3.eth.sendSignedTransaction(signedTransaction.rawTransaction || "");
        })
        .then((receipt) => {
          console.log("Transaction receipt:", receipt);
        })
        .catch((error) => {
          console.error("Error sending transaction:", error);
        });
}
ContractSendTx();
