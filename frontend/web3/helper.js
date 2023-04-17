import { ethers } from "ethers"
import Escrow from "./artifacts/contracts/Escrow.sol/Escrow"

export const deploy = async (signer, arbiter, beneficiary, value) => {
	const factory = new ethers.ContractFactory(Escrow.abi, Escrow.bytecode, signer)
	return factory.deploy(arbiter, beneficiary, { value })
}
