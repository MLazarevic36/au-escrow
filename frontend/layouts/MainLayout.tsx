import { Flex } from "@chakra-ui/react"
import SideBar from "./SideBar"
import { LayoutProps } from "./pageWithLayouts"

const MainLayout: LayoutProps = ({ children }) => {
	return (
		<Flex flexDir={"column"}>
			<SideBar />
			{children}
		</Flex>
	)
}

export default MainLayout
