import { Film, Details, ShortFilm } from '../types'

export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES'
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES'

export type AddToFavoritesAction = {
  type: typeof ADD_TO_FAVORITES
  payload: Film | Details | ShortFilm
}

export type RemoveFromFavoritesAction = {
  type: typeof REMOVE_FROM_FAVORITES
  payload: number
}

export type ActionTypes = AddToFavoritesAction | RemoveFromFavoritesAction
