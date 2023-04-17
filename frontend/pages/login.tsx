import MainLayout from "@/layouts/MainLayout"
import { Text } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useForm } from "react-hook-form"
import SEO from "../layouts/SEO"
import userHook from "../redux/stateHooks/userHook"

const Login = () => {
	const { isAuthenticated, signIn, message } = userHook()
	const router = useRouter()

	const { register, handleSubmit } = useForm<any>()

	const submit = (payload: any) => {
		const newPayload: any = {
			email: payload.email,
			password: payload.password,
			returnSecureToken: true,
		}

		signIn(newPayload)
	}

	return (
		<div>
			<SEO title="Prijava" />
			<main>
				Login
				{message && <Text>{message.text}</Text>}
				<form onSubmit={handleSubmit(submit)}>
					<input type="text" placeholder="Email" {...register("email")} />
					<input type="password" placeholder="Password" {...register("password")} />
					<button type="submit">Sign in</button>
				</form>
			</main>
		</div>
	)
}

Login.layout = MainLayout

export default Login
