import { ActionTypes, ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from './types'
import { Film, Details, ShortFilm } from '../types'

export const addToFavorites = (
  film: Film | Details | ShortFilm
): ActionTypes => ({
  type: ADD_TO_FAVORITES,
  payload: film,
})

export const removeFromFavorites = (id: number): ActionTypes => ({
  type: REMOVE_FROM_FAVORITES,
  payload: id,
})
