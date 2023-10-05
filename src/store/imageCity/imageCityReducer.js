import { IMAGE_INITIAL_STATE } from "./imageCityState";
import { IMAGE_ACTIONS_TYPES } from "./imageCityTypes";

export const imageCityReducer = (state = IMAGE_INITIAL_STATE, action) => {
	const { type, payload } = action;

	switch (type) {
		case IMAGE_ACTIONS_TYPES.GET_IMAGE:
			return {
				...state,
				imageURL: payload,
			};
		case IMAGE_ACTIONS_TYPES.RESET_IMAGE:
			return IMAGE_INITIAL_STATE;
		default:
			return state;
	}
};
