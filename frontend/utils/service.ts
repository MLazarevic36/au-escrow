import { IncomingMessage, ServerResponse } from "http"
import axiosInstance from "../redux/axiosInstance"
import { Message } from "../redux/types"

export const refreshAccessToken = async (req: IncomingMessage, res: ServerResponse) => {
	try {
		const apiRes = await axiosInstance().post("/auth/refresh", {
			// refreshToken: getCookie("refresh", { req, res }),
		})
		const data = apiRes.data.data

		// setCookies("access", data.access_token, {
		// 	req,
		// 	res,
		// 	httpOnly: true,
		// 	maxAge: Number(data.expires_in) * 5,
		// 	secure: process.env.NODE_ENV !== "development",
		// })
		return data.access_token
	} catch (error) {
		const errorMessage: Message = {
			status: 500,
			text: "Server error!",
			type: "error",
		}
		return { message: errorMessage }
	}
}
