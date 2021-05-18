import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Toast } from 'react-bootstrap'

const ErrorToast = () => {
  const [show, setShow] = useState(false)

  const weather = useSelector((state) => state.weather)
  const { error } = weather

  const favorites = useSelector((state) => state.favorites)
  const { error: favoritesWeatherError } = favorites

  useEffect(() => {
    if (error || favoritesWeatherError) {
      setShow(true)
    }
  }, [error, favoritesWeatherError])

  const hideToast = () => setShow(false)

  return (
    <Toast show={show} onClose={hideToast}>
      <Toast.Header>
        <img src='holder.js/20x20?text=%20' className='rounded mr-2' alt='' />
        <strong className='mr-auto'>Error</strong>
      </Toast.Header>
      <Toast.Body>
        <p>
          Ouch! We are sorry, but it seems that there is a {error} on our side.
        </p>
        <p>We are working on it and hope that it will be solved soon.</p>
        <p>Please try again later.</p>
      </Toast.Body>
    </Toast>
  )
}

export default ErrorToast
