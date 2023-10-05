import { FAVORITES_ACTIONS_TYPES } from "./favoritesTypes";

export const addFavoritesAction = (favoriteId) => ({
	type: FAVORITES_ACTIONS_TYPES.ADD_FAVORITES,
	payload: favoriteId,
});

export const removeFavoritesAction = (favoriteId) => ({
	type: FAVORITES_ACTIONS_TYPES.REMOVE_FAVORITES,
	payload: favoriteId,
});
