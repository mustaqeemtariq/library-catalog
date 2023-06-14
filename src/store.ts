import { combineReducers, configureStore } from "@reduxjs/toolkit"
import persistedReducer from "./slices/books"
import persistStore from "redux-persist/es/persistStore"

const rootReducer = combineReducers({
  books: persistedReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export const persistor = persistStore(store)
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export default store
