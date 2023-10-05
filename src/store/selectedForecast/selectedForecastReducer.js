import { SELECTED_FORECAST_INITIAL_STATE } from "./selectedForecastState";
import { SELECTED_FORECAST_ACTIONS_TYPES } from "./selectedForecastTypes";

export const selectedForecastReducer = (state = SELECTED_FORECAST_INITIAL_STATE, action) => {
	const { type, payload } = action;

	switch (type) {
		case SELECTED_FORECAST_ACTIONS_TYPES.SELECT_DAY:
			return {
				...state,
				selectedForecast: payload,
			};
		default:
			return state;
	}
};
