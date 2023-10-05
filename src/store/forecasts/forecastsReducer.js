import { FORECASTS_INITIAL_STATE } from "./forecastsState";
import { FORECASTS_ACTIONS_TYPES } from "./forecastsTypes";

export const forecastsReducer = (state = FORECASTS_INITIAL_STATE, action) => {
	const { type, payload } = action;

	switch (type) {
		case FORECASTS_ACTIONS_TYPES.SET_FORECASTS:
			return {
				...state,
				forecasts: payload,
			};
		default:
			return state;
	}
};
