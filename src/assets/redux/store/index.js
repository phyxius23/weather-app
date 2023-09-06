import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
import cityReducer from "../reducers/cityReducer";
import favoritesReducer from "../reducers/favoritesReducer";
import nextForecastReducer from "../reducers/nextForecastReducer";
import selectedDayReducer from "../reducers/selectedDayReducer";
import imageCityReducer from "../reducers/imageCityReducer";

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
	nextForecast: nextForecastReducer,
	selectedDay: selectedDayReducer,
	imageCity: imageCityReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
