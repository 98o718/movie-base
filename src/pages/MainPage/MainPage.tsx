import React from 'react'
import { Helmet } from 'react-helmet'
import { useFilmsGrid } from '../../hooks'
import { FilmsGrid, PaginationWrapper } from '../../components'

type MainPageProps = {
  page?: number
}

const MainPage = ({ page = 1 }: MainPageProps) => {
  const {
    page: p,
    error,
    loading,
    setPage,
    total,
    films,
    checkExistance,
    addToFavs,
    removeFromFavs,
  } = useFilmsGrid(page, process.env.REACT_APP_POPULAR_URL!)

  return (
    <>
      <Helmet>
        <title>The Movie Base{` | страница ${page}`}</title>
      </Helmet>
      <FilmsGrid
        films={films}
        error={error}
        loading={loading}
        checkExistance={checkExistance}
        addToFavorites={addToFavs}
        removeFromFavorites={removeFromFavs}
      />
      <PaginationWrapper
        page={p}
        error={error}
        loading={loading}
        setPage={setPage}
        total={total}
      />
    </>
  )
}

export default MainPage
