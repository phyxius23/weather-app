import { SELECTED_FORECAST_ACTIONS_TYPES } from "../selectedForecast/selectedForecastTypes";

/** SELECT DAY */
export const selectedForecastAction = (day) => ({ type: SELECTED_FORECAST_ACTIONS_TYPES.SELECT_DAY, payload: day });
