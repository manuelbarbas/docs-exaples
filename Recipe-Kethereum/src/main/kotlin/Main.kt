import org.kethereum.model.Address
import org.kethereum.model.ChainId
import org.kethereum.model.createTransactionWithDefaults
import org.kethereum.rpc.min3.getMin3RPC
import org.kethereum.abi.EthereumABI
import org.kethereum.crypto.toAddress
import org.kethereum.eip155.signViaEIP155
import org.kethereum.extensions.transactions.encode
import java.math.BigInteger
import org.komputing.khex.extensions.hexToByteArray
import org.komputing.khex.extensions.toHexString
import org.komputing.khex.model.HexString

import org.kethereum.model.PrivateKey
import org.kethereum.crypto.toECKeyPair

import org.kethereum.rpc.EthereumRPCException
import chains;

fun main(args: Array<String>) {

    val privateKey = PrivateKey(HexString("your private key"))
    var keyPar = privateKey.toECKeyPair()

    val selected_chain = chains[ChainKey.nebula];

    val rpc_url = selected_chain!!.chainInfo!!.testnet!!.rpcUrl;

    val SKALE_CHAIN_RPC = listOf(
        rpc_url,
        rpc_url
    )
    //Your contract address
    val CONTRACT_ADDRES = Address(selected_chain.chainInfo!!.testnet.contracts[0].address);
    //chain_id
    val chainID = ChainId(37084624)

    val rpc = getMin3RPC(SKALE_CHAIN_RPC)
    val txCount = rpc.getTransactionCount(keyPar.toAddress(), "latest");

    val address_mint_receiver = "address without the 0x";

    val tx = createTransactionWithDefaults(
        chain = chainID,
        to= CONTRACT_ADDRES,
        from = keyPar.toAddress(),
        gasLimit = BigInteger("100000"),
        gasPrice = BigInteger("100000"),
        input = HexString("d2fe5e92000000000000000000000000$address_mint_receiver").hexToByteArray(), //hex of your contract method and input params
        nonce = txCount,
        value = BigInteger("0")
    );

    val tx_signed = tx.signViaEIP155(keyPar,chainID);

    val tx_ = tx.encode(tx_signed).toHexString()

    try {
        val result = rpc.sendRawTransaction(tx_)
        if (result == null) {
            println("Problem sending transaction")
        } else {
            println("sending tx OK ($result)")
        }
    } catch (rpcException: EthereumRPCException) {
        println("send tx error " + rpcException.message)
    }
}