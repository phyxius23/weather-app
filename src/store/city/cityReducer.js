import { CITY_INITIAL_STATE } from "./cityState";
import { CITY_ACTIONS_TYPES } from "./cityTypes";

export const cityReducer = (state = CITY_INITIAL_STATE, action) => {
	const { type, payload } = action;

	switch (type) {
		case CITY_ACTIONS_TYPES.SET_CITY:
			return {
				...state,
				city: payload,
			};
		default:
			return state;
	}
};
