import { ethers } from 'ethers';
import {abi} from "./contract";
import {chains} from "./chains"
import dotenv from 'dotenv';
dotenv.config();

const selected_chain = chains.nebula;

const skale_provider = selected_chain.chainInfo.testnet.rpcUrl;
const provider = new ethers.JsonRpcProvider(skale_provider);

const pk = process.env.PRIVATE_KEY || "";
const signer = new ethers.Wallet(pk, provider);

const contract = new ethers.Contract(selected_chain.chainInfo.testnet.contracts[0].address, abi, signer);

// Send transaction to smart contract to update message
async function ContractSendTx() {    
    
    const request = await contract.mintTest.populateTransaction(signer.address);
    const tx = await signer.sendTransaction(request);
    const receipt = await tx.wait();

    console.log(receipt);

}
ContractSendTx();
