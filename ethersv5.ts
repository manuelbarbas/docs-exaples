import { ethers } from 'ethers';
import {abi} from "./contract";
import {chains} from "./chains"
import dotenv from 'dotenv';
dotenv.config();

const selected_chain = chains.nebula;

const skale_provider = selected_chain.chainInfo.testnet.rpcUrl;
const provider = new ethers.providers.JsonRpcProvider(skale_provider);

const pk = process.env.PRIVATE_KEY || "";
const signer = new ethers.Wallet(pk, provider);

const contract = new ethers.Contract(selected_chain.chainInfo.testnet.contracts[0].address, abi, signer);

// Send transaction to smart contract to update message
async function ContractSendTx() {
    const data = await contract.populateTransaction.mintTest(signer.address);
    data.gasLimit = ethers.BigNumber.from(100000);
    data.gasPrice = ethers.BigNumber.from(100000);
    data.nonce = await provider.getTransactionCount(signer.address);

    const approveTxSigned = await signer.signTransaction(data);
    const submittedTx = await provider.sendTransaction(approveTxSigned);
    const approveReceipt = await submittedTx.wait();
    console.log(approveReceipt.transactionHash);

}
ContractSendTx();
