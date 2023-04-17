import { useAppDispatch, useAppSelector } from "../hooks"
import { addEscrowContract, updateEscrowContract } from "../state/escrowState"
import { RootState } from "../store"

export default function escrowHook() {
	const dispatch = useAppDispatch()
	const { escrowContracts, message, loading } = useAppSelector((state: RootState) => state.escrow)

	const addContract = async (payload: any) => {
		dispatch(addEscrowContract(payload))
	}

	const updateContract = async (payload: any) => {
		dispatch(updateEscrowContract(payload))
	}

	return {
		escrowContracts,
		message,
		loading,
		addContract,
		updateContract,
	}
}
