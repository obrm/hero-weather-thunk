import axios from 'axios'
import { errorHandler } from './errorHandler'
import { CITY_BY_NAME_URL } from './helperConstants'

export const getCityByName = async (cityName) => {
  try {
    const { data } = await axios.get(
      `${CITY_BY_NAME_URL}${process.env.REACT_APP_ACCUWEATHER_KEY}&q=${cityName}`
    )
    return data[0].Key
  } catch (error) {
    return errorHandler(error)
  }
}
