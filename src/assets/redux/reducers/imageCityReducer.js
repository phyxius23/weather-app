import { GET_IMAGE } from "../actions";

const initialState = {
	content: "",
};

const imageCityReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_IMAGE:
			return {
				...state,
				content: action.payload,
			};

		default:
			return state;
	}
};

export default imageCityReducer;
