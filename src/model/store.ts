import { createStore } from 'redux'
import { favoritesReducer } from './favoritesReducer'

export const store = createStore(
  favoritesReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)
