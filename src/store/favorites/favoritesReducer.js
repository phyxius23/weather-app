import { FAVORITES_INITIAL_STATE } from "./favoritesState";
import { FAVORITES_ACTIONS_TYPES } from "./favoritesTypes";

export const favoritesReducer = (state = FAVORITES_INITIAL_STATE, action) => {
	const { type, payload } = action;

	switch (type) {
		case FAVORITES_ACTIONS_TYPES.ADD_FAVORITES:
			return {
				...state,
				favorites: [...state.favorites, payload],
			};
		case FAVORITES_ACTIONS_TYPES.REMOVE_FAVORITES:
			return {
				...state,
				favorites: [...state.favorites.filter((favoriteId) => favoriteId !== payload)],
			};
		default:
			return state;
	}
};
