import {
  WEATHER_REQUEST,
  WEATHER_SUCCESS,
  WEATHER_FAIL,
} from './weatherConstants'
import { GENERAL_RESET } from '../general/generalConstants'

export const weatherReducer = (
  state = {
    currentWeather: null,
    currentWeatherCityName: null,
    fiveDaysForecast: null,
  },
  action
) => {
  const { type, payload } = action
  switch (type) {
    case WEATHER_REQUEST:
      return { ...state, loading: true }
    case WEATHER_SUCCESS:
      return {
        loading: false,
        currentWeather: payload.currentWeather,
        currentWeatherCityName: payload.currentWeatherCityName,
        fiveDaysForecast: payload.fiveDaysForecast,
      }
    case WEATHER_FAIL:
      return { loading: false, error: payload }
    case GENERAL_RESET:
      return {
        loading: false,
        currentWeather: null,
        currentWeatherCityName: null,
        fiveDaysForecast: null,
      }
    default:
      return state
  }
}
