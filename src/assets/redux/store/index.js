import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
import cityReducer from "../reducers/cityReducer";
import dailyForecastReducer from "../reducers/dailyForecastReducer";
import favoritesReducer from "../reducers/favoritesReducer";
import nextForecastReducer from "../reducers/nextForecastReducer";

const persistConfig = {
	key: "root",
	storage,
	transforms: [
		encryptTransform({
			secretKey: process.env.REACT_APP_PERSIST_KEY,
		}),
	],
};

const rootReducer = combineReducers({
	city: cityReducer,
	favorites: favoritesReducer,
	dailyForecast: dailyForecastReducer,
	nextForecast: nextForecastReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
