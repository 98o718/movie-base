import React from 'react'
import { useFilmsGrid } from '../../hooks'
import { FilmsGrid, PaginationWrapper } from '../../components'
import { Helmet } from 'react-helmet'
import { SearchPageHeading } from './SearchPage.styles'

type SearchPageProps = {
  page?: number
  query: string
}

const SearchPage = ({ page = 1, query }: SearchPageProps) => {
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
  } = useFilmsGrid(
    page,
    `${process.env.REACT_APP_SEARCH_URL}${query}`,
    `/search/${query}/`
  )

  return (
    <>
      <Helmet>
        <title>
          {decodeURI(query)} {` | страница ${page} `}– The Movie Base
        </title>
      </Helmet>
      <SearchPageHeading>
        Результаты поиска по запросу: {decodeURI(query)}
      </SearchPageHeading>
      <FilmsGrid
        films={films}
        error={error}
        loading={loading}
        checkExistance={checkExistance}
        addToFavorites={addToFavs}
        removeFromFavorites={removeFromFavs}
      />
      {!!films?.length && (
        <PaginationWrapper
          page={p}
          error={error}
          loading={loading}
          setPage={setPage}
          total={total}
        />
      )}
    </>
  )
}

export default SearchPage
