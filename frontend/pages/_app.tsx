import PageWithLayoutType from "@/layouts/pageWithLayouts"
import theme from "@/styles/theme"
import { RainbowKitProvider, WagmiConfig, chains, wagmiClient } from "@/web3/web3Config"
import { ChakraProvider } from "@chakra-ui/react"
import type { AppProps } from "next/app"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { persistor, store } from "../redux/store"

type AppLayoutProps = AppProps & {
	Component: PageWithLayoutType
	pageProps: any
}

function MyApp({ Component, pageProps }: AppLayoutProps) {
	const Layout = Component.layout || ((children: any) => <>{children}</>)

	let initialChain: any = process.env.DEFAULT_CHAIN

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<WagmiConfig client={wagmiClient}>
					<RainbowKitProvider modalSize="compact" initialChain={initialChain} chains={chains}>
						<ChakraProvider theme={theme}>
							<Layout>
								<Component {...pageProps} />
							</Layout>
						</ChakraProvider>
					</RainbowKitProvider>
				</WagmiConfig>
			</PersistGate>
		</Provider>
	)
}

export default MyApp
