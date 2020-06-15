import { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FavoritesState } from '../model/favoritesReducer'
import { ShortFilm, Details, Film } from '../types'
import { useLocation } from 'wouter'
import { addToFavorites, removeFromFavorites } from '../model/actions'

export const useFavorites = (startPage: number, search?: string) => {
  const films = useSelector((state: FavoritesState) => state.films)
  const [shortFilms, setShortFilms] = useState<ShortFilm[]>([])
  const [, setLocation] = useLocation()

  const [page, setPage] = useState(startPage)

  const countTotal = (f: (Film | Details | ShortFilm)[]) =>
    Math.floor(f.length / 20) + (f.length % 20 === 0 ? 0 : 1)
  const [total, setTotal] = useState(countTotal(films))

  const transformFilms = useCallback(
    (f: (Film | Details | ShortFilm)[]) =>
      f
        .map((film) => {
          const a = film as ShortFilm
          const b = film as Film | Details
          return {
            poster: b.poster_path ? b.poster_path : a.poster,
            releaseDate: b.release_date ? b.release_date : a.releaseDate,
            title: film.title,
            id: film.id,
          }
        })
        .slice((page - 1) * 20, page * 20) as ShortFilm[],
    [page]
  )

  useEffect(() => {
    if (search !== undefined && search.trim() !== '') {
      const filtered = films.filter((film) =>
        film.title.toLowerCase().trim().includes(search.trim().toLowerCase())
      )

      setTotal(countTotal(filtered))
      setShortFilms(transformFilms(filtered))
    } else {
      setTotal(countTotal(films))
      setShortFilms(transformFilms(films))
    }
  }, [search, films, transformFilms])

  useEffect(() => {
    if (page > total) {
      setPage(1)
    } else {
      setLocation(page === 1 ? '/favorites' : `/favorites/page/${page}`)
    }
  }, [page, setLocation, total])

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
    shortFilms,
    page,
    setPage,
    total,
    checkExistance,
    addToFavs,
    removeFromFavs,
  }
}
