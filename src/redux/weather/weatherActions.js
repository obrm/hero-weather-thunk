import axios from 'axios'
import {
  WEATHER_REQUEST,
  WEATHER_SUCCESS,
  WEATHER_FAIL,
  DEFAULT_LOCATION,
  DEFAULT_CITY_NAME,
  CURRENT_WEATHER_URL,
  FIVE_DAYS_URL,
} from './weatherConstants'
import { errorHandler } from '../helper/errorHandler'
import { getCityByCoords } from '../helper/getCityByCoords'

export const getWeather = (weatherParams) => async (dispatch) => {
  try {
    dispatch({ type: WEATHER_REQUEST })

    let { latitude, longitude, location, cityName } = weatherParams

    let cityNameFromGeolocation = ''

    if (latitude && longitude) {
      const data = await getCityByCoords(latitude, longitude)
      location = data.Key
      cityNameFromGeolocation = data.EnglishName
    }

    if (!location) {
      location = DEFAULT_LOCATION
    }

    if (!cityName) {
      cityName = DEFAULT_CITY_NAME
    }

    const getCurrentWeather = axios.get(
      `${CURRENT_WEATHER_URL}${location}?apikey=${process.env.REACT_APP_ACCUWEATHER_KEY}`
    )

    const getFiveDaysForecast = axios.get(
      `${FIVE_DAYS_URL}${location}?apikey=${process.env.REACT_APP_ACCUWEATHER_KEY}&metric=true`
    )

    const [currentWeather, fiveDaysForecast] = await Promise.all([
      getCurrentWeather,
      getFiveDaysForecast,
    ])

    dispatch({
      type: WEATHER_SUCCESS,
      payload: {
        currentWeather: currentWeather.data[0],
        currentWeatherCityName: cityNameFromGeolocation
          ? cityNameFromGeolocation
          : cityName,
        fiveDaysForecast: fiveDaysForecast.data.DailyForecasts,
      },
    })
  } catch (error) {
    dispatch({
      type: WEATHER_FAIL,
      payload: errorHandler(error),
    })
  }
}
