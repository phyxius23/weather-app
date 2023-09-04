import { ADD_FAVORITE, REMOVE_FAVORITE } from "../actions";

const initialState = {
	content: [],
};

const favoritesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_FAVORITE: // DA CORREGGERE
			return {
				...state,
				content: action.payload,
			};
		case REMOVE_FAVORITE: // DA CORREGGERE
			return {
				...state,
				content: action.payload,
			};

		default:
			return state;
	}
};

export default favoritesReducer;
