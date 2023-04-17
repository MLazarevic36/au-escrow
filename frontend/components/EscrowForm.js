import { deploy } from "@/web3/helper"
import { Button, Center, CloseButton, FormControl, FormLabel, Heading, Input, Stack } from "@chakra-ui/react"
import { ethers } from "ethers"
import { useForm } from "react-hook-form"

const EscrowForm = ({ signer, add, close }) => {
	const { handleSubmit, register } = useForm()

	const submit = async (data) => {
		const amount = ethers.utils.parseUnits(data.amount, "ether")
		const arbiter = data.arbiter
		const beneficiary = data.beneficiary

		try {
			const escrowContract = await deploy(signer, arbiter, beneficiary, amount)
			console.log(escrowContract, "escrow")
			if (escrowContract && escrowContract.address) {
				add({
					contractAddress: escrowContract.address,
					arbiter: arbiter,
					beneficiary: beneficiary,
					amount: data.amount,
					approved: false,
				})
			}
		} catch (error) {
			console.log(error, "error")
		}
	}

	return (
		<form onSubmit={handleSubmit(submit)}>
			<Stack
				w="600px"
				minH="200px"
				rounded="4px"
				bg="_darkGray"
				// ml={{ base: 0, lg: "130px !important" }}
				align="center"
				position="relative"
				px={5}
				py={3}
				spacing={4}
			>
				<CloseButton color={"_white"} pos="absolute" right={0} top={0} onClick={() => close()} />
				<Heading variant={"h1"}>New escrow contract</Heading>
				<FormControl isRequired>
					<FormLabel color={"_white"}>Arbiter address</FormLabel>

					<Input {...register("arbiter")} variant={"field"} />
				</FormControl>
				<FormControl isRequired>
					<FormLabel color={"_white"}>Beneficiary address</FormLabel>
					<Input {...register("beneficiary")} variant={"field"} />
				</FormControl>
				<FormControl isRequired>
					<FormLabel color={"_white"}>{"Amount (in ETH)"}</FormLabel>
					<Input {...register("amount")} w="150px" variant={"field"} />
				</FormControl>
				<Center w="100%">
					<Button type="submit" variant={"primary"} textTransform="uppercase">
						Create
					</Button>
				</Center>
			</Stack>
		</form>
	)
}

export default EscrowForm
