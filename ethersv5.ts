import { ethers } from 'ethers';
import {contract_abi,contract_adress} from "./contract";
import {chains} from "./chains"
import dotenv from 'dotenv';
dotenv.config();

const skale_provider = chains.nebula.chainInfo.testnet.rpcUrl;
const provider = new ethers.providers.JsonRpcProvider(skale_provider);
const pk = process.env.PRIVATE_KEY || "";
const signer = new ethers.Wallet(pk, provider);

const contract = new ethers.Contract(contract_adress, contract_abi, signer);

// Send transaction to smart contract to update message
async function ContractSendTx() {
    const data = await contract.populateTransaction.mintTest(signer.address);
    data.gasLimit = ethers.BigNumber.from(200000);
    data.gasPrice = ethers.BigNumber.from(100000);
    data.nonce = await provider.getTransactionCount(signer.address);

    const approveTxSigned = await signer.signTransaction(data);
    const submittedTx = await provider.sendTransaction(approveTxSigned);
    const approveReceipt = await submittedTx.wait();
    console.log(approveReceipt.transactionHash);

}
ContractSendTx();
