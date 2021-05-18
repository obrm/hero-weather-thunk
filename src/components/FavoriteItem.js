import { Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, useHistory } from 'react-router-dom'

import { getWeather } from '../redux/weather/weatherActions'
import { FAVORITE_SHOW_ITEM } from '../redux/favorites/favoritesConstants'
import { weatherImageChooser } from './helper/weatherImageChooser'

const FavoriteItem = ({
  favoriteCityName,
  cityKey,
  weather: {
    WeatherText,
    WeatherIcon,
    Temperature: {
      Metric: { Value },
    },
  },
}) => {
  const history = useHistory()

  const dispatch = useDispatch()

  const roundedTemperature = Math.round(parseFloat(Value))

  const weatherImage = weatherImageChooser(WeatherText)

  const onClickHandler = () => {
    dispatch({ type: FAVORITE_SHOW_ITEM, payload: favoriteCityName })
    dispatch(getWeather({ location: cityKey, cityName: favoriteCityName }))
    history.push('/home')
  }

  return (
    <Card
      className='img-fluid'
      style={{ width: '15rem', height: '160px', cursor: 'pointer' }}
      onClick={onClickHandler}
    >
      <Card.Img
        src={`/img/weather-images/${weatherImage}.jpg`}
        alt='Weather image'
        style={{ width: '100%' }}
        loading='lazy'
      />
      <Card.ImgOverlay className='text-center'>
        <h3 style={{ fontSize: '1.5rem' }}>
          {favoriteCityName.length > 17
            ? `${favoriteCityName.slice(0, 15)}...`
            : favoriteCityName}
        </h3>
        <img
          src={`/img/weather-icons/${WeatherIcon}-s.png`}
          alt='weather icon'
          className='column'
          loading='lazy'
        />
        <p className='card-text-favorite'>{roundedTemperature} &deg;</p>
      </Card.ImgOverlay>{' '}
    </Card>
  )
}

FavoriteItem.propTypes = {
  favoriteCityName: PropTypes.string.isRequired,
  cityKey: PropTypes.string.isRequired,
  weather: PropTypes.object.isRequired,
}

export default FavoriteItem
