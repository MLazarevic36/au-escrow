import userHook from "@/redux/stateHooks/userHook"
import { Flex, Stack, Text } from "@chakra-ui/react"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import Link from "next/link"

const data = [
	{ label: "Escrow", url: "/" },
	// { title: "Functions", url: "/functions" },
	// { title: "Icons", url: "/icons" },
]

const SideBar = () => {
	const { signIn, address, isAuthenticated, signOut } = userHook()

	// async function getAccounts() {
	// 	const accounts = await provider.send("eth_requestAccounts", [])
	// 	signIn({ address: accounts[0], signer: provider.getSigner() })
	// }

	return (
		<Flex align="center" p="12px 12px 12px 22px" bg="_mediumGray">
			<Stack w="100%">
				{data.map((link, i) => {
					return (
						<Link href={link.url}>
							<Text color="_white" _hover={{ cursor: "pointer", textDecoration: "underline" }}>
								{link.label}
							</Text>
						</Link>
					)
				})}
			</Stack>

			<ConnectButton accountStatus={"address"} />
		</Flex>
	)
}

export default SideBar
