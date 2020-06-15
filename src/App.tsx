import React from 'react'
import { Global, css } from '@emotion/core'
import emotionNormalize from 'emotion-normalize'
import { Switch, Route, Redirect } from 'wouter'
import { Layout, Header } from './components'
import {
  MainPage,
  SearchPage,
  FilmDetailsPage,
  FavoritesPage,
  NotFoundPage,
} from './pages'

function App() {
  return (
    <>
      <Global
        styles={css`
          ${emotionNormalize}
          html,
              body {
            padding: 0;
            margin: 0;
            min-height: 100%;
            font-family: Helvetica, Arial, sans-serif;
          }
          body {
            background: linear-gradient(
              to bottom,
              rgb(142, 45, 226),
              rgb(74, 0, 224)
            );
          }
        `}
      />
      <Header />
      <Layout>
        <Switch>
          <Route path="/favorites">
            <FavoritesPage />
          </Route>
          <Route path="/favorites/page/:page">
            {(params) =>
              Number(params.page) <= 0 || isNaN(Number(params.page)) ? (
                <Redirect to="/" />
              ) : (
                <FavoritesPage page={Number(params.page)} />
              )
            }
          </Route>
          <Route path="/page/:page">
            {(params) =>
              Number(params.page) <= 0 || isNaN(Number(params.page)) ? (
                <Redirect to="/" />
              ) : (
                <MainPage page={Number(params.page)} />
              )
            }
          </Route>
          <Route path="/search/:query">
            {(params) =>
              params.query.trim() === '' ? (
                <Redirect to="/" />
              ) : (
                <SearchPage page={1} query={params.query.trim()} />
              )
            }
          </Route>
          <Route path="/search/:query/page/:page">
            {(params) =>
              params.query.trim() === '' ? (
                <Redirect to="/" />
              ) : Number(params.page) <= 0 || isNaN(Number(params.page)) ? (
                <Redirect to={`/search/${params.query.trim()}`} />
              ) : (
                <SearchPage
                  page={Number(params.page)}
                  query={params.query.trim()}
                />
              )
            }
          </Route>
          <Route path="/film/:id">
            {(params) =>
              Number(params.id) < 0 || isNaN(Number(params.id)) ? (
                <Redirect to="/" />
              ) : (
                <FilmDetailsPage id={Number(params.id)} />
              )
            }
          </Route>
          <Route path="/">
            <MainPage page={1} />
          </Route>
          <Route path="/:rest*">
            <NotFoundPage />
          </Route>
        </Switch>
      </Layout>
    </>
  )
}

export default App
