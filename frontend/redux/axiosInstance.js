import axios from "axios"
import { refreshAccessToken } from "../helper/functions"
import { loginUrl, refreshUrl } from "./apiUrls"

const axiosInstance = () => {
	const axiosApiInstance = axios.create()

	axiosApiInstance.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL

	// Request interceptor for API calls
	axiosApiInstance.interceptors.request.use(
		async (config) => {
			config.headers = {
				Accept: "application/json",
				"Content-Type": "application/json",
			}

			if (typeof window !== "undefined") {
				const accessToken = localStorage.getItem("access")
				if (accessToken && config.url !== refreshUrl) {
					config.headers["Authorization"] = `Bearer ${accessToken}`
				}
			}

			return config
		},
		(error) => {
			Promise.reject(error)
		}
	)

	// Response interceptor for API calls
	axiosApiInstance.interceptors.response.use(
		(response) => {
			return response
		},
		async function (error) {
			const originalRequest = error.config
			if (error.response && error.response.status === 401 && error.config.url !== loginUrl && !originalRequest._retry) {
				originalRequest._retry = true
				const access_token = await refreshAccessToken()
				axios.defaults.headers.common["Authorization"] = `Bearer ${access_token}`
				return axiosApiInstance(originalRequest)
			}
			return Promise.reject(error)
		}
	)

	return axiosApiInstance
}

export default axiosInstance
