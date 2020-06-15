import { useCallback } from 'react'
import { useFetch } from '.'
import { Details, Film } from '../types'
import { FavoritesState } from '../model/favoritesReducer'
import { useDispatch, useSelector } from 'react-redux'
import { addToFavorites, removeFromFavorites } from '../model/actions'

export const useFilmDetails = (id: number) => {
  const [film, loading, error] = useFetch<Details>(
    `${process.env.REACT_APP_DETAILS_URL!}${id}?language=ru-RU`
  )

  const checkExistance = useCallback(
    (state: FavoritesState) =>
      state.films.some((f) => film && f.id === film.id),
    [film]
  )
  const isExist = useSelector(checkExistance)

  const dispatch = useDispatch()
  const addToFavs = (film: Film | Details) => dispatch(addToFavorites(film))
  const removeFromFavs = (id: number) => dispatch(removeFromFavorites(id))

  return {
    film,
    loading,
    error,
    isExist,
    addToFavs,
    removeFromFavs,
  }
}
