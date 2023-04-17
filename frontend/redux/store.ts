import { Action, combineReducers, configureStore, ThunkAction } from "@reduxjs/toolkit"
import { persistStore } from "redux-persist"
import persistReducer from "redux-persist/lib/persistReducer"
import escrowReducer from "./state/escrowState"
import userReducer from "./state/userState"
import storage from "./storage"

const persistConfig = {
	key: "root",
	version: 1,
	storage,
	whitelist: ["user", "escrow"],
}

const reducer = combineReducers({
	user: userReducer,
	escrow: escrowReducer,
})

const rootReducer = (state: any, action: any) => {
	if (action.type === "user/logout") {
		if (typeof window !== "undefined") {
			localStorage.removeItem("persist:root")
		}

		state = undefined
	}
	return reducer(state, action)
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	devTools: process.env.NODE_ENV !== "production",
	middleware: (getDefaultMiddleware) => [
		...getDefaultMiddleware({
			serializableCheck: false,
		}),
	],
})

export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
