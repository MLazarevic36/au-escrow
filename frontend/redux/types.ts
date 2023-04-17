//auth
export type LoginResponse = {
	access: string
	refresh: string
}

export type UserState = {
	isAuthenticated: boolean
	message: Message | null
	id: number | null
	firstName: string
	lastName: string
	role: number | null
	email: string
	phoneNumber: string
}

export type Message = {
	text: string
	status: number
	type: string
}
