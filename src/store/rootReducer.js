import { combineReducers } from "@reduxjs/toolkit";
import { encryptTransform } from "redux-persist-transform-encrypt";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import { cityReducer } from "./city/cityReducer";
import { favoritesReducer } from "./favorites/favoritesReducer";
import { forecastsReducer } from "./forecasts/forecastsReducer";
import { imageCityReducer } from "./imageCity/imageCityReducer";
import { selectedForecastReducer } from "./selectedForecast/selectedForecastReducer";

// *************** COMBINE REDUCER WITH REDUX ***************
export const rootReducer = combineReducers({
	city: cityReducer,
	favorites: favoritesReducer,
	forecasts: forecastsReducer,
	imageCity: imageCityReducer,
	selectedForecast: selectedForecastReducer,
});

// *************** PERSIST CONFIG WITH REDUX ***************
const persistConfig = {
	key: "root",
	storage,
	whitelist: ["favorites"],
	transform: [
		encryptTransform({
			secretKey: process.env.REACT_APP_PERSIST_KEY,
		}),
	],
};

// *************** PERSIST (PERSIST CONFIG + ROOT REDUCER) WITH REDUX ***************
export const persistedReducer = persistReducer(persistConfig, rootReducer);
