export type ChainKey = "none" | "calypso" | "europa" | "nebula" | "titan";

export type ChainInfo = {
	chainId: number;
	rpcUrl: string;
	contracts: {
		address: string;
		contractName: string;
		contractType: "erc20" | "erc721" | "erc1155";
		decimals?: number;
	}[]
}

export type Chain = {
	name: string;
	description: string;
	logoUrl: string;
	color: string;
	background: string;
    gradientBackground: string;
    chainInfo?: {
    	mainnet?: ChainInfo;
    	testnet: ChainInfo;
    }
};

const chains = {
	"calypso": {
		"name": "Calypso Innovation Hub",
		"description": "An Innovation Hub focused on projects looking to use blockchain in new and unique ways",
		"logoUrl": "https://raw.githubusercontent.com/skalenetwork/skale-network/master/metadata/mainnet/logos/honorable-steel-rasalhague.png",
		"color": "#FFF",
		"background": "#ce126f",
    	"gradientBackground": "linear-gradient(270deg, rgb(103 35 71), rgb(57 15 68))",
    	"chainInfo": {
    		"mainnet": {
    			"rpcUrl": "https://mainnet.skalenodes.com/v1/honorable-steel-rasalhague",
    			"chainId": 1564830818,
    			"contracts": [],
    		},
    		"testnet": {
    			"rpcUrl": "https://testnet.skalenodes.com/v1/giant-half-dual-testnet",
    			"chainId": 974399131,
    			"contracts": []
    		}
    	}
	},
	"europa": {
		"name": "Europa DeFi & Liquidity Hub",
		"description": "The Liquidity Hub acts as both a utility to the SKALE Ecosystem and the home of DeFi on SKALE",
		"logoUrl": "https://raw.githubusercontent.com/skalenetwork/skale-network/master/metadata/mainnet/logos/elated-tan-skat.png",
		"color": "#FFF",
		"background": "rgb(5 19 37)",
    	"gradientBackground": "linear-gradient(270deg, rgb(5, 19, 37), rgb(13 36 65))",
    	"chainInfo": {
    		"mainnet": {
    			"rpcUrl": "https://mainnet.skalenodes.com/v1/elated-tan-skat",
    			"chainId": 2046399126,
    			"contracts": []
    		},
    		"testnet": {
    			"rpcUrl": "https://testnet.skalenodes.com/v1/juicy-low-small-testnet",
    			"chainId": 1444673419,
    			"contracts": []
    		},
    	}
	},
	"nebula": {
		"name": "Nebula Gaming Hub",
		"description": "A hub focused 100% on gaming, Nebula is the home of gaming on the SKALE Network",
		"logoUrl": "https://raw.githubusercontent.com/skalenetwork/skale-network/master/metadata/mainnet/logos/green-giddy-denebola.png",
		"color": "#FFF",
		"background": "#2c1626",
    	"gradientBackground": "linear-gradient(270deg, #2f1728, #1b0e17)",
    	"chainInfo": {
    		"mainnet": {
    			"rpcUrl": "https://mainnet.skalenodes.com/v1/green-giddy-denebola",
    			"chainId": 1482601649,
    			"contracts": [],    		},
    		"testnet": {
    			"rpcUrl": "https://testnet.skalenodes.com/v1/lanky-ill-funny-testnet",
    			"chainId": 37084624,
    			"contracts": []
    		},
    	}
	},
	"titan": {
		"name": "Titan AI Hub",
		"description": "The AI Hub on SKALE is a great starting place to explore the crossover between AI and blockchain",
		"logoUrl": "https://portal.skale.space/assets/parallel-stormy-spica-068cfa33.png",
		"color": "#FFF",
		"background": "#FFF",
    	"gradientBackground": "linear-gradient(270deg, rgb(72, 33, 17), rgb(34, 13, 5))",
    	"chainInfo": {
    		"mainnet": {
    			"rpcUrl": "https://mainnet.skalenodes.com/v1/parallel-stormy-spica",
    			"chainId": 1350216234,
    			"contracts": [],
    		},
    		"testnet": {
    			"rpcUrl": "https://testnet.skalenodes.com/v1/aware-fake-trim-testnet",
    			"chainId": 1020352220,
    			"contracts": [],
            },
    	}
	}
} satisfies {[key: string]: Chain};

const chainList = Object.entries(chains);

export {
	chains,
	chainList
}