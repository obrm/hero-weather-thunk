import { useSelector } from 'react-redux'

import WeatherForecastItem from '../components/WeatherForecastItem'

const FiveDaysForecast = () => {
  const weather = useSelector((state) => state.weather)
  const { fiveDaysForecast, loading } = weather

  return (
    <div className='weather-forecast'>
      {!loading &&
        fiveDaysForecast &&
        fiveDaysForecast.map((forecast) => (
          <WeatherForecastItem key={forecast.EpochDate} forecast={forecast} />
        ))}
    </div>
  )
}

export default FiveDaysForecast
