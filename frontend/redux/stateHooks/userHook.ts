import { useAppDispatch, useAppSelector } from "../hooks"
import { login, logout } from "../state/userState"
import { RootState } from "../store"

export default function userHook() {
	const dispatch = useAppDispatch()
	const { isAuthenticated, address, signer, message, loading } = useAppSelector((state: RootState) => state.user)

	const signIn = async (payload: any) => {
		dispatch(login(payload))
	}

	const signOut = async () => {
		dispatch(logout())
	}

	return {
		isAuthenticated,
		message,
		address,
		signer,
		loading,
		signIn,
		signOut,
	}
}
