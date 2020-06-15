import { ActionTypes, ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from './types'
import { Film, Details, ShortFilm } from '../types'

export interface FavoritesState {
  films: (Film | Details | ShortFilm)[]
}

const persistedState = localStorage.getItem('reduxState')

const initialState = persistedState
  ? JSON.parse(persistedState)
  : {
      films: [],
    }

export const favoritesReducer = (
  state: FavoritesState = initialState,
  action: ActionTypes
) => {
  switch (action.type) {
    case ADD_TO_FAVORITES: {
      const { films } = state

      const isExist = films.some((film) => film.id === action.payload.id)
      if (isExist) {
        return { ...state, films }
      }

      films.push(action.payload)

      return { ...state, films }
    }
    case REMOVE_FROM_FAVORITES: {
      return {
        ...state,
        films: state.films.filter((film) => film.id !== action.payload),
      }
    }
    default:
      return state
  }
}
