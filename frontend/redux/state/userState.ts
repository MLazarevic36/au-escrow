import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: any = {
	isAuthenticated: false,
	address: "",
	signer: null,
	message: null,
	loading: false,
}

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		login: (state, action: PayloadAction<any>) => {
			state.isAuthenticated = true
			state.address = action.payload.address
			state.signer = action.payload.signer
			state.message = null
		},
		setMessage: (state, action: PayloadAction<any>) => {
			state.message = action.payload
		},
		logout: (state) => {
			state.isAuthenticated = false
			state.signer = null
			state.address = ""
			state.message = null
			state.loading = false
		},
		setLoading: (state, action: PayloadAction<any>) => {
			state.loading = action.payload
		},
	},
})

// Here we are just exporting the actions from this slice, so that we can call them anywhere in our app.
export const { login, setMessage, logout, setLoading } = userSlice.actions

// exporting the reducer here, as we need to add this to the store
export default userSlice.reducer
