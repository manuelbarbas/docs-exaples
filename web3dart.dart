// ignore_for_file: public_member_api_docs
import 'dart:io';

import 'package:http/http.dart';
import 'package:web3dart/web3dart.dart';
import 'package:path/path.dart' show join, dirname;
import 'package:web_socket_channel/io.dart';

//Private Key
const String privateKey ='your private key';

// SKALE Chain RPC
const String rpcUrl = 'https://testnet.skalenodes.com/v1/lanky-ill-funny-testnet';
// selected SKALE Chain ID
const int chainId = 37084624;

// ABI of ERC_721 example contract
final File abiFile = File(join(dirname(Platform.script.path), 'abi.json'));


Future<void> main() async {
  // start a client we can use to send transactions
  final client = Web3Client(rpcUrl, Client());

  final EthereumAddress mint_to_address = EthereumAddress.fromHex('address to mint to');
  // Contract adddress deployed on SKALE Chaos Hub
  final EthereumAddress contract_address = EthereumAddress.fromHex('0x4487AF7f18044A99927e81CC628F558F3D091419');
  
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