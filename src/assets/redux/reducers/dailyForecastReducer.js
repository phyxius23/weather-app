import { SET_DAILY_FORECAST } from "../actions";

const initialState = {
	content: "",
};

const dailyForecastReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_DAILY_FORECAST:
			return {
				...state,
				content: action.payload,
			};

		default:
			return state;
	}
};

export default dailyForecastReducer;
