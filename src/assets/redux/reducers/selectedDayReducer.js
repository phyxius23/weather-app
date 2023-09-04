import { SELECT_DAY } from "../actions";

const initialState = {
	content: "",
};

const selectedDayReducer = (state = initialState, action) => {
	switch (action.type) {
		case SELECT_DAY:
			return {
				...state,
				content: action.payload,
			};

		default:
			return state;
	}
};

export default selectedDayReducer;
