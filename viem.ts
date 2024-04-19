import { createWalletClient, custom,http ,createPublicClient} from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { skaleNebulaTestnet } from "viem/chains";
import {abi} from "./contract";
import dotenv from 'dotenv';
dotenv.config();

const publicClient = createPublicClient({
    chain: skaleNebulaTestnet,
    transport: http()
  })

const pk = process.env.PRIVATE_KEY || "";
const account = privateKeyToAccount(`0x${pk}`);

//Place here the contract address you deployed
const contract_address = "0x4487AF7f18044A99927e81CC628F558F3D091419";

const walletClient = createWalletClient({
    chain: skaleNebulaTestnet,
    transport: http(),
  })


// Send transaction to smart contract to update message
async function ContractSendTx() {    
    
    const { request } = await publicClient.simulateContract({
        address: contract_address,
        abi: abi,
        functionName: 'mintTest',
        args: [account.address],
        account
      })
    const tx =  await walletClient.writeContract(request)
    console.log(tx);
}
ContractSendTx();
