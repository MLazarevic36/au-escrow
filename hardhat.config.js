require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()

module.exports = {
	solidity: "0.8.19",
	paths: {
		artifacts: "./frontend/web3/artifacts",
	},
	networks: {
		hardhat: {},
		ETH_GOERLI: {
			accounts: [`${process.env.PRIVATE_KEY}`],
			url: `https://eth-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY.toString()}`,
		},
	},
}
