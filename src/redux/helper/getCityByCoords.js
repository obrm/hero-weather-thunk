import axios from 'axios'

import { errorHandler } from './errorHandler'
import { CITY_BY_COORDS_URL } from './helperConstants'

export const getCityByCoords = async (latitude, longitude) => {
  try {
    const { data } = await axios.get(
      `${CITY_BY_COORDS_URL}${process.env.REACT_APP_ACCUWEATHER_KEY}&q=${latitude},${longitude}`
    )

    return data
  } catch (error) {
    console.error(error)
    return errorHandler(error)
  }
}
