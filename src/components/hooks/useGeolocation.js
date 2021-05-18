import { useState, useEffect } from 'react'

const useGeolocation = () => {
  const [currentPosition, setCurrentPosition] = useState({
    loaded: false,
    coords: { latitude: '', longitude: '' },
  })

  const onSuccess = (location) => {
    setCurrentPosition({
      loaded: true,
      coords: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      },
    })
  }

  const onError = (error) => {
    setCurrentPosition({
      loaded: true,
      error,
    })
  }

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      onError({
        code: 0,
        message: 'Geolocation not supported',
      })
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError)
  }, [])

  return currentPosition
}

export default useGeolocation
