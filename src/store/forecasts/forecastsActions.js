import { FORECASTS_ACTIONS_TYPES } from "../forecasts/forecastsTypes";
import { baseEndpoint } from "../../utils/utils";
import { key } from "../../utils/utils";

/** SET NEXT DAY FORECAST */
export const getForecastsAction = (city) => {
	return async (dispatch, getState) => {
		try {
			const response = await fetch(baseEndpoint + "/forecast.json?key=" + key + "&q=" + city.lat + "," + city.lon + "&lang=it&days=11");

			if (response.ok) {
				const data = await response.json();

				dispatch({ type: FORECASTS_ACTIONS_TYPES.SET_FORECASTS, payload: data });

				// console.log(data);
			} else {
				alert("alert: error fetching results");
			}
		} catch (error) {
			console.log(error.message);
		}
	};
};
