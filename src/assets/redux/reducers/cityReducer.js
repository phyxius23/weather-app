import { SET_CITY } from "../actions";

const initialState = {
	content: "",
};

const cityReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CITY:
			return {
				...state,
				content: action.payload,
			};

		default:
			return state;
	}
};

export default cityReducer;
