import { CITY_ACTIONS_TYPES } from "../city/cityTypes";

/** SET SELECTED CITY */
export const getCityAction = (city) => ({ type: CITY_ACTIONS_TYPES.SET_CITY, payload: city });
