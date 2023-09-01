import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";

const persistConfig = {
	key: "root",
	storage,
	transforms: [
		encryptTransform({
			secretKey: process.env.REACT_APP_PERSIST_KEY,
		}),
	],
};

// cartReducer e userReducer ad esempio gestiscono la loro porzione di stato più piccola,
// con combineReducer riportiamo le sezioni (slices) in un'unico macro oggetto globale
// prima di passarlo allo store
const rootReducer = combineReducers({
	// cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// configureStore ha bisogno della struttura del nostro store/stato globale come parametro principale(quindi un reducer)
export const store = configureStore({
	// reducer
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
