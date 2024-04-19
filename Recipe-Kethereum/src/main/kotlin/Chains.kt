class ChainKey {
    companion object {
        const val calypso = "calypso"
        const val europa = "europa"
        const val nebula = "nebula"
        const val titan = "titan"
    }
}

data class Testnet(
    val chainId: Int,
    val rpcUrl: String,
    val contracts: List<ContractInfo>
)

data class Mainnet(
    val chainId: Int,
    val rpcUrl: String,
    val contracts: List<ContractInfo>
)

data class ChainInfo(
    val mainnet: Mainnet,
    val testnet: Testnet
)

data class ContractInfo(
    val address: String,
    val contractName: String,
    val contractType: String,
    val decimals: Int? = null
)

data class Chain(
    val name: String,
    val description: String,
    val logoUrl: String,
    val color: String,
    val background: String,
    val gradientBackground: String,
    val chainInfo: ChainInfo?
)

val chains = mapOf(
    ChainKey.calypso to Chain(
        name = "Calypso Innovation Hub",
        description = "An Innovation Hub focused on projects looking to use blockchain in new and unique ways",
        logoUrl = "https://raw.githubusercontent.com/skalenetwork/skale-network/master/metadata/mainnet/logos/honorable-steel-rasalhague.png",
        color = "#FFF",
        background = "#ce126f",
        gradientBackground = "linear-gradient(270deg, rgb(103 35 71), rgb(57 15 68))",
        chainInfo = ChainInfo(
            mainnet = Mainnet(
                chainId = 1564830818,
                rpcUrl = "https://mainnet.skalenodes.com/v1/honorable-steel-rasalhague",
                contracts = emptyList()
            ),
            testnet = Testnet(
                chainId = 974399131,
                rpcUrl = "https://testnet.skalenodes.com/v1/giant-half-dual-testnet",
                contracts = listOf(
                    ContractInfo(
                        address = "0xD8C9b79daA0aa37072d1aB6B410B3A6dd686EaFf",
                        contractName = "MyToken",
                        contractType = "erc721"
                    )
                )
            )
        )
    ),
    ChainKey.europa to Chain(
        name = "Europa DeFi & Liquidity Hub",
        description = "The Liquidity Hub acts as both a utility to the SKALE Ecosystem and the home of DeFi on SKALE",
        logoUrl = "https://raw.githubusercontent.com/skalenetwork/skale-network/master/metadata/mainnet/logos/elated-tan-skat.png",
        color = "#FFF",
        background = "rgb(5 19 37)",
        gradientBackground = "linear-gradient(270deg, rgb(5, 19, 37), rgb(13 36 65))",
        chainInfo = ChainInfo(
            mainnet = Mainnet(
                chainId = 2046399126,
                rpcUrl = "https://mainnet.skalenodes.com/v1/elated-tan-skat",
                contracts = emptyList()
            ),
            testnet = Testnet(
                chainId = 1444673419,
                rpcUrl = "https://testnet.skalenodes.com/v1/juicy-low-small-testnet",
                contracts = listOf(
                    ContractInfo(
                        address = "0x574e0Ba1DE67f849b4af96C2C77cA81A6EAD18d0",
                        contractName = "MyToken",
                        contractType = "erc721"
                    )
                )
            )
        )
    ),
    ChainKey.nebula to Chain(
        name = "Nebula Gaming Hub",
        description = "A hub focused 100% on gaming, Nebula is the home of gaming on the SKALE Network",
        logoUrl = "https://raw.githubusercontent.com/skalenetwork/skale-network/master/metadata/mainnet/logos/green-giddy-denebola.png",
        color = "#FFF",
        background = "#2c1626",
        gradientBackground = "linear-gradient(270deg, #2f1728, #1b0e17)",
        chainInfo = ChainInfo(
            mainnet = Mainnet(
                chainId = 1482601649,
                rpcUrl = "https://mainnet.skalenodes.com/v1/green-giddy-denebola",
                contracts = emptyList()
            ),
            testnet = Testnet(
                chainId = 37084624,
                rpcUrl = "https://testnet.skalenodes.com/v1/lanky-ill-funny-testnet",
                contracts = listOf(
                    ContractInfo(
                        address = "0x4487AF7f18044A99927e81CC628F558F3D091419",
                        contractName = "MyToken",
                        contractType = "erc721"
                    )
                )
            )
        )
    ),
    ChainKey.titan to Chain(
        name = "Titan AI Hub",
        description = "The AI Hub on SKALE is a great starting place to explore the crossover between AI and blockchain",
        logoUrl = "https://portal.skale.space/assets/parallel-stormy-spica-068cfa33.png",
        color = "#FFF",
        background = "#FFF",
        gradientBackground = "linear-gradient(270deg, rgb(72, 33, 17), rgb(34, 13, 5))",
        chainInfo = ChainInfo(
            mainnet = Mainnet(
                chainId = 1350216234,
                rpcUrl = "https://mainnet.skalenodes.com/v1/parallel-stormy-spica",
                contracts = emptyList()
            ),
            testnet = Testnet(
                chainId = 1020352220,
                rpcUrl = "https://testnet.skalenodes.com/v1/aware-fake-trim-testnet",
                contracts = listOf(
                    ContractInfo(
                        address = "0xB2d03AbBb56B3E4B910eFf8F4ed55baFa36103df",
                        contractName = "MyToken",
                        contractType = "erc721"
                    )
                )
            )
        )
    )
)

val chainList = chains.entries.toList()
