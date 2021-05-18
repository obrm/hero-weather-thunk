import axios from 'axios'
import {
  FAVORITE_ADD_ITEM,
  FAVORITE_REMOVE_ITEM,
  FAVORITE_ITEMS_WEATHER_REQUEST,
  FAVORITE_ITEMS_WEATHER_SUCCESS,
  FAVORITE_ITEMS_WEATHER_FAIL,
  FAVORITE_ITEMS_WEATHER_RESET,
} from './favoritesConstants'
import { CURRENT_WEATHER_URL } from '../weather/weatherConstants'
import { getCityByName } from '../helper/getCityByName'
import { errorHandler } from '../helper/errorHandler'

export const addToFavorites =
  (favoriteCityName) => async (dispatch, getState) => {
    dispatch({
      type: FAVORITE_ADD_ITEM,
      payload: { favoriteCityName },
    })

    localStorage.setItem(
      'favorites',
      JSON.stringify(getState().favorites.favoritesWeatherItems)
    )
  }

export const removeFromFavorites =
  (favoriteCityName) => (dispatch, getState) => {
    dispatch({
      type: FAVORITE_REMOVE_ITEM,
      payload: favoriteCityName,
    })

    localStorage.setItem(
      'favorites',
      JSON.stringify(getState().favorites.favoritesWeatherItems)
    )
  }

export const getFavoritesWeather = () => async (dispatch, getState) => {
  dispatch({ type: FAVORITE_ITEMS_WEATHER_RESET })

  const favorites = getState().favorites.favoritesWeatherItems

  favorites.forEach(async (favorite) => {
    try {
      dispatch({ type: FAVORITE_ITEMS_WEATHER_REQUEST })

      const key = await getCityByName(favorite.favoriteCityName)

      const { data } = await axios.get(
        `${CURRENT_WEATHER_URL}${key}?apikey=${process.env.REACT_APP_ACCUWEATHER_KEY}`
      )

      dispatch({
        type: FAVORITE_ITEMS_WEATHER_SUCCESS,
        payload: {
          favoriteCityName: favorite.favoriteCityName,
          weather: data[0],
          key,
        },
      })
    } catch (error) {
      dispatch({
        type: FAVORITE_ITEMS_WEATHER_FAIL,
        payload: errorHandler(error),
      })
    }
  })
}
