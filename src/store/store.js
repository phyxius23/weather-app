import { configureStore } from "@reduxjs/toolkit";
import { persistedReducer } from "./rootReducer";
import persistStore from "redux-persist/es/persistStore";

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
