export const weatherImageChooser = (weatherText) => {
  switch (weatherText) {
    case 'sunny':
    case 'Hot':
    case 'Mostly Sunny':
    case 'Partly Sunny':
    case 'Intermittent Clouds':
      return 'sunny-day'
    case 'Hazy Sunshine':
    case 'Windy':
      return 'hazy-day'
    case 'Fog':
      return 'fog-day'
    case 'Mostly Cloudy':
    case 'Cloudy':
    case 'Partly Sunny w/ Flurries':
      return 'cloudy-day'
    case 'Dreary (Overcast)':
    case 'Mostly Cloudy w/ Flurries':
    case 'Flurries':
      return 'Dreary-day'
    case 'Showers':
    case 'Cold':
    case 'Ice':
    case 'Sleet':
    case 'Mostly Cloudy w/ Showers':
    case 'Partly Sunny w/ Showers':
    case 'Light rain':
      return 'cloudy-with-showers-day'
    case 'Mostly Cloudy w/ T-Storms':
    case 'Partly Sunny w/ T-Storms':
    case 'T-Storms':
    case 'Mostly Cloudy w/ Snow':
    case 'Snow':
    case 'Rain and Snow':
      return 'storm-day'
    case 'Rain':
    case 'Freezing Rain':
      return 'rain-day'
    case 'Clear':
    case 'Mostly Clear':
      return 'clear-sky-night'
    case 'Partly Cloudy':
    case 'Partly Cloudy w/ Showers':
      return 'cloudy-night'
    case 'Hazy Moonlight':
      return 'hazy-night'
    case 'Partly Cloudy w/ T-Storms':
      return 'rain-night'
    default:
      return 'sunny-day'
  }
}
