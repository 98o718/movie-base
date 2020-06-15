import { ReqResult, ShortFilm } from '../types'
import { useFetch } from './useFetch'
import { useState, useEffect, useCallback } from 'react'
import { useLocation } from 'wouter'
import { useSelector, useDispatch } from 'react-redux'
import { FavoritesState } from '../model/favoritesReducer'
import { addToFavorites, removeFromFavorites } from '../model/actions'

export const useFilmsGrid = (startPage = 1, url: string, base = '/') => {
  const [page, setPage] = useState(startPage)
  const [reqResult, loading, error] = useFetch<ReqResult>(`${url}&page=${page}`)

  const [, setLocation] = useLocation()

  useEffect(() => {
    setPage(startPage)
  }, [startPage])

  useEffect(() => {
    setLocation(page === 1 ? base : `${base}page/${page}`)
  }, [page, setLocation, base])

  useEffect(() => {
    if (error || (reqResult && page > reqResult.total_pages)) {
      setPage(1)
    }
  }, [error, reqResult, page])

  const shortFilms = reqResult?.results.map((film) => ({
    poster: film.poster_path,
    releaseDate: film.release_date,
    title: film.title,
    id: film.id,
  }))

  const { favorites } = useSelector((state: FavoritesState) => ({
    favorites: state.films,
  }))

  const checkExistance = useCallback(
    (id: number) => favorites.some((f) => f.id === id),
    [favorites]
  )

  const dispatch = useDispatch()
  const addToFavs = (film: ShortFilm) => dispatch(addToFavorites(film))
  const removeFromFavs = (id: number) => dispatch(removeFromFavorites(id))

  return {
    films: shortFilms,
    loading,
    error,
    total: reqResult !== undefined ? reqResult.total_pages : 0,
    page,
    setPage,
    checkExistance,
    addToFavs,
    removeFromFavs,
  }
}
