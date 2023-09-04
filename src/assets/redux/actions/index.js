export const SET_CITY = "SET_CITY";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const SET_DAILY_FORECAST = "SET_DAILY_FORECAST";
export const SET_NEXT_FORECAST = "SET_NEXT_FORECAST";

const baseEndpoint = process.env.REACT_APP_WEATHER_URL;
const key = process.env.REACT_APP_WEATHER_KEY;

/** SET DAILY FORECAST */
export const getDailyForecastAction = (city) => {
	return async (dispatch, getState) => {
		try {
			const response = await fetch(baseEndpoint + "/current.json?key=" + key + "&q=" + city.lat + "," + city.lon + "&lang=it");

			if (response.ok) {
				const data = await response.json();

				dispatch({ type: SET_DAILY_FORECAST, payload: data });

				// console.log(data);
			} else {
				alert("alert: error fetching results");
			}
		} catch (error) {
			console.log(error.message);
		}
	};
};

/** SET NEXT FORECAST */
export const getNextForecastAction = (city) => {
	return async (dispatch, getState) => {
		try {
			const response = await fetch(baseEndpoint + "/forecast.json?key=" + key + "&q=" + city.lat + "," + city.lon + "&lang=it&days=7");

			if (response.ok) {
				const data = await response.json();

				dispatch({ type: SET_NEXT_FORECAST, payload: data });

				// console.log(data);
			} else {
				alert("alert: error fetching results");
			}
		} catch (error) {
			console.log(error.message);
		}
	};
};

// export const addToCartActionWithThunk = bookSelected => {
//    return (dispatch, getState) => {
//      const currentState = getState();
//      console.log("DENTRO ADD TO CART WITH THUNK ", currentState);
//      console.log(
//        "CHECK",
//        currentState.cart.content.findIndex(book => book.id === bookSelected.id)
//      );
//      const checkBookInCart = currentState.cart.content.findIndex(book => book.id === bookSelected.id);
//      if (checkBookInCart === -1) {
//        dispatch({ type: ADD_TO_CART, payload: bookSelected });
//      } else {
//        console.log("LIBRO GIA' PRESENTE NEL CARRELLO");
//      }
//    };
//  };
