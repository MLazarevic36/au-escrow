export const refreshAccessToken = async () => {
	try {
		const res = await axiosInstance().post(refreshUrl, {
			refresh: localStorage.getItem("refresh"),
		})
		localStorage.setItem("access", res.data.access)
		return res.data.access
	} catch (error) {
		return error
	}
}
