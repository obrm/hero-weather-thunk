import {
  FAVORITE_ADD_ITEM,
  FAVORITE_REMOVE_ITEM,
  FAVORITE_SHOW_ITEM,
  FAVORITE_ITEMS_WEATHER_REQUEST,
  FAVORITE_ITEMS_WEATHER_SUCCESS,
  FAVORITE_ITEMS_WEATHER_FAIL,
  FAVORITE_ITEMS_WEATHER_RESET,
} from './favoritesConstants'
import { GENERAL_RESET } from '../general/generalConstants'

export const favoritesReducer = (
  state = {
    favoritesWeatherItems: [],
    showCityFromFavorites: false,
    favoriteCityName: null,
    favoritesItemsWeather: [],
  },
  action
) => {
  const { type, payload } = action

  switch (type) {
    case FAVORITE_ADD_ITEM:
      return {
        ...state,
        favoritesWeatherItems: [...state.favoritesWeatherItems, payload],
      }
    case FAVORITE_REMOVE_ITEM:
      return {
        ...state,
        favoritesWeatherItems: state.favoritesWeatherItems.filter(
          (item) => item.favoriteCityName !== payload
        ),
      }
    case FAVORITE_SHOW_ITEM:
      return {
        ...state,
        showCityFromFavorites: true,
        favoriteCityName: payload,
      }
    case GENERAL_RESET:
      return {
        ...state,
        loading: false,
        showCityFromFavorites: false,
        favoriteCityName: null,
      }
    case FAVORITE_ITEMS_WEATHER_REQUEST:
      return { ...state, loading: true }
    case FAVORITE_ITEMS_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        favoritesItemsWeather: [...state.favoritesItemsWeather, payload],
      }
    case FAVORITE_ITEMS_WEATHER_FAIL:
      return { ...state, loading: false, error: payload }
    case FAVORITE_ITEMS_WEATHER_RESET:
      return { ...state, favoritesItemsWeather: [] }
    default:
      return state
  }
}
