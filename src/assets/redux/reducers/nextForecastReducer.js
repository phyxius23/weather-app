import { SET_NEXT_FORECAST } from "../actions";

const initialState = {
	content: "",
};

const nextForecastReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_NEXT_FORECAST:
			return {
				...state,
				content: action.payload,
			};

		default:
			return state;
	}
};

export default nextForecastReducer;
