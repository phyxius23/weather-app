import { IMAGE_ACTIONS_TYPES } from "./imageCityTypes";
import { accessKeyUnsplash } from "../../utils/utils";

/** GET IMAGE CITY */
export const getImageCity = (nameCity) => {
	console.log(nameCity);
	return async (dispatch, getState) => {
		try {
			const response = await fetch("https://api.unsplash.com/search/photos/?client_id=" + accessKeyUnsplash + "&query=" + nameCity + "&orientation=landscape");

			if (response.ok) {
				const data = await response.json();

				const image = await data.results[0].urls.regular;

				dispatch({ type: IMAGE_ACTIONS_TYPES.GET_IMAGE, payload: image });

				// console.log(data);
			} else {
				alert("alert: error fetching results");
			}
		} catch (error) {
			console.log(error.message);
		}
	};
};

/** RESET IMAGE CITY */
export const resetImageAction = () => ({ type: IMAGE_ACTIONS_TYPES.RESET_IMAGE });
