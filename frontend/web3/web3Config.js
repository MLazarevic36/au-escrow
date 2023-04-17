import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit"
import "@rainbow-me/rainbowkit/styles.css"
import { hardhat } from "@wagmi/chains"
import { configureChains, createClient, goerli, mainnet, WagmiConfig } from "wagmi"
import { alchemyProvider } from "wagmi/providers/alchemy"
import { publicProvider } from "wagmi/providers/public"

const { chains, provider } = configureChains(
	[
		mainnet,
		goerli,
		// polygon,
		// polygonMumbai,
		// optimism,
		// optimismGoerli,
		// arbitrum,
		// arbitrumGoerli,
		// polygonZkEvm,
		// polygonZkEvmTestnet,
		hardhat,
	],
	[alchemyProvider({ apiKey: process.env.ALCHEMY_API_KEY }), publicProvider()]
)

const { connectors } = getDefaultWallets({
	appName: "My Alchemy DApp",
	chains,
})

const wagmiClient = createClient({
	autoConnect: true,
	connectors,
	provider,
})

export { WagmiConfig, RainbowKitProvider, wagmiClient, chains }
