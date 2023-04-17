import EscrowForm from "@/components/EscrowForm"
import EscrowTable from "@/components/EscrowTable"
import MainLayout from "@/layouts/MainLayout"
import escrowHook from "@/redux/stateHooks/escrowHook"
import { Button, Flex, Stack } from "@chakra-ui/react"
import { useState } from "react"
import { useSigner } from "wagmi"

const Home = () => {
	const [createNewToggle, setCreateNewToggle] = useState(false)
	const [allContractsToggle, setAllContractsToggle] = useState(false)

	const { data: signer, isError, isLoading } = useSigner()
	const { addContract, escrowContracts, updateContract } = escrowHook()

	// 0x5FbDB2315678afecb367f032d93F642f64180aa3

	const handleCreateNewToggle = () => {
		setCreateNewToggle(false)
	}

	const handleAllContractsToggle = () => {
		setCreateNewToggle(false)
		setAllContractsToggle(true)
	}

	const handleAllContractClose = () => {
		setCreateNewToggle(false)
		setAllContractsToggle(false)
	}

	return (
		<Flex alignItems={!allContractsToggle ? "center" : ""} justifyContent="center" height="100vh">
			<Stack align={"center"}>
				{!createNewToggle && !allContractsToggle && (
					<Button w="300px" variant={"primary"} onClick={() => setCreateNewToggle(true)}>
						Create new escrow
					</Button>
				)}

				{createNewToggle && <EscrowForm signer={signer} add={addContract} close={handleCreateNewToggle} />}
				{escrowContracts.length > 0 && !allContractsToggle && (
					<Button w="300px" variant={"primary"} onClick={() => handleAllContractsToggle()}>
						See all escrows
					</Button>
				)}
				{allContractsToggle && <EscrowTable data={escrowContracts} close={handleAllContractClose} update={updateContract} />}
			</Stack>
		</Flex>
	)
}
Home.layout = MainLayout
export default Home
