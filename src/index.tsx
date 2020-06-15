import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import axios from 'axios'
import { store } from './model/store'

axios.interceptors.request.use(
  async (config) => {
    if (process.env.REACT_APP_TOKEN) {
      config.headers.Authorization = `Bearer ${process.env.REACT_APP_TOKEN}`
    }
    return config
  },
  (err) => Promise.reject(err)
)

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
