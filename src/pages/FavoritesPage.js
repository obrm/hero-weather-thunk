import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'
import { getFavoritesWeather } from '../redux/favorites/favoritesActions'
import Spinner from '../components/layout/Spinner'
import ErrorToast from '../components/ErrorToast'
import FavoriteItem from '../components/FavoriteItem'

const FavoritesPage = () => {
  const dispatch = useDispatch()

  const favorites = useSelector((state) => state.favorites)
  const { favoritesWeatherItems, loading, favoritesItemsWeather, error } =
    favorites

  useEffect(() => {
    dispatch(getFavoritesWeather())
  }, [dispatch])

  return (
    <>
      <Helmet>
        <title>Hero Weather Favorites</title>
      </Helmet>
      <div>
        <h2 className='text-center mb-5'>Favorites</h2>
        {loading ? (
          <Spinner />
        ) : error ? (
          <ErrorToast />
        ) : favoritesWeatherItems && favoritesWeatherItems.length === 0 ? (
          <h4>There are no favorites yet</h4>
        ) : (
          favoritesWeatherItems &&
          !loading &&
          favoritesItemsWeather && (
            <div className='favorites-grid text-center'>
              {favoritesItemsWeather.map((fav) => (
                <FavoriteItem
                  favoriteCityName={fav.favoriteCityName}
                  weather={fav.weather}
                  key={fav.key}
                  cityKey={fav.key}
                />
              ))}
            </div>
          )
        )}
      </div>
    </>
  )
}

export default FavoritesPage
