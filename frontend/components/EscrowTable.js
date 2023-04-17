import { Button, Stack, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useContractWrite, usePrepareContractWrite } from "wagmi"
import Escrow from "../web3/artifacts/contracts/Escrow.sol/Escrow"

const EscrowTable = ({ data, close, update }) => {
	const [contractAddress, setContractAddress] = useState("")

	const { config } = usePrepareContractWrite({
		address: contractAddress,
		abi: Escrow.abi,
		functionName: "approve",
	})
	const { data: contractData, isLoading, isSuccess, write } = useContractWrite(config)

	useEffect(() => {
		if (contractAddress) {
			write?.()
		}
	}, [contractAddress])

	useEffect(() => {
		if (isSuccess) {
			update({ address: contractAddress, approved: true })
			setContractAddress("")
		}
	}, [isSuccess])

	return (
		<Stack align={"start"}>
			<Button onClick={() => close()}>Back</Button>
			<Table variant="simple">
				<Thead bg="_lightGray">
					<Tr>
						<Th color="_white">Contract address</Th>
						<Th color="_white">Arbiter</Th>
						<Th color="_white">Beneficiary</Th>
						<Th color="_white">{"Amount (ETH)"}</Th>
						<Th color="_white">Approved status</Th>
						<Th></Th> {/* Empty header for action column */}
					</Tr>
				</Thead>
				<Tbody>
					{data.map((contract, i) => {
						return (
							<Tr>
								<Td>{contract.contractAddress}</Td>
								<Td>{contract.arbiter}</Td>
								<Td>{contract.beneficiary}</Td>
								<Td>{contract.amount}</Td>
								<Td>{contract.approved ? "yes" : "no"}</Td>

								{!contract.approved && (
									<Td>
										<Button
											variant={"primary"}
											onClick={() => setContractAddress(contract.contractAddress)}
											isLoading={isLoading}
										>
											Approve
										</Button>
									</Td>
								)}
							</Tr>
						)
					})}
				</Tbody>
			</Table>
		</Stack>
	)
}

export default EscrowTable
