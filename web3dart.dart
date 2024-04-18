// ignore_for_file: public_member_api_docs
import 'dart:io';

import 'package:http/http.dart';
import 'package:web3dart/web3dart.dart';
import 'package:path/path.dart' show join, dirname;
import 'package:web_socket_channel/io.dart';
import 'chains.dart';

//Private Key
const String privateKey ='your pk';

//Select which chain you want to use
Chain? selected_SKALE_chain = chains[ChainKey.nebula];

// SKALE Chain RPC
String rpcUrl = selected_SKALE_chain?.chainInfo?.testnet.rpcUrl ?? "no url";
// selected SKALE Chain ID
int chainId = selected_SKALE_chain?.chainInfo?.testnet.chainId ?? 0;

// ABI of ERC_721 example contract
final File abiFile = File(join(dirname(Platform.script.path), 'abi.json'));


Future<void> main() async {

  // start a client we can use to send transactions
  final client = Web3Client(rpcUrl, Client());

  final EthereumAddress mint_to_address = EthereumAddress.fromHex('address to mint to');

  String adddress = selected_SKALE_chain?.chainInfo?.testnet.contracts[0].address ?? "no address";

  final EthereumAddress contract_address = EthereumAddress.fromHex(adddress);
  
  //Credentials to sign tx
  final credentials = EthPrivateKey.fromHex(privateKey);

  //ABI file as string
  final abiCode = await abiFile.readAsString();
  
  final contract = DeployedContract(ContractAbi.fromJson(abiCode, 'MyToken'), contract_address);
  //Selected contract function to call
  final mintFunction = contract.function('mintTest');

  // Mint function call
  //Note: The chainId needs to be passes otherwise it will throw the error: -32004 Invalid transaction signature.
  final tx = await client.sendTransaction(
    credentials,
    Transaction.callContract(
      contract: contract,
      function: mintFunction,
      parameters: [mint_to_address],
    ),
    chainId: chainId
  );

  // Transaction Receipt
  final receipt = await client.addedBlocks().asyncMap((_) => client.getTransactionReceipt(tx)).firstWhere((receipt) => receipt != null);
  print(receipt);

  await client.dispose();
}