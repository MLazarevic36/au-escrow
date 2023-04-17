import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: any = {
	escrowContracts: [],
	message: null,
	loading: false,
}

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		addEscrowContract: (state, action: PayloadAction<any>) => {
			state.escrowContracts.push(action.payload)
			state.message = null
		},
		updateEscrowContract: (state, action: PayloadAction<any>) => {
			let currentContract = state.escrowContracts.find((contract: any) => contract.contractAddress === action.payload.address)
			currentContract["approved"] = action.payload.approved
			state.message = null
		},
		setMessage: (state, action: PayloadAction<any>) => {
			state.message = action.payload
		},

		setLoading: (state, action: PayloadAction<any>) => {
			state.loading = action.payload
		},
	},
})

// Here we are just exporting the actions from this slice, so that we can call them anywhere in our app.
export const { setMessage, setLoading, addEscrowContract, updateEscrowContract } = userSlice.actions

// exporting the reducer here, as we need to add this to the store
export default userSlice.reducer
