import React from 'react'
import { FilmsGrid, PaginationWrapper, Filter } from '../../components'
import { useFavorites } from '../../hooks/useFavorites'
import { Helmet } from 'react-helmet'
import { useFilter } from '../../hooks/useFilter'
import { FavoritesPageFilterWrapper } from './FavoritesPage.styles'

type FavoritesPageProps = {
  page?: number
}

const FavoritesPage = ({ page = 1 }: FavoritesPageProps) => {
  const { search, handleChange } = useFilter()
  const {
    shortFilms,
    page: p,
    total,
    setPage,
    checkExistance,
    addToFavs,
    removeFromFavs,
  } = useFavorites(page, search)

  return (
    <>
      <Helmet>
        <title>Избранные{` | страница ${page} `} – The Movie Base</title>
      </Helmet>
      {(!!shortFilms.length || search) && (
        <FavoritesPageFilterWrapper>
          <Filter search={search} handleChange={handleChange} />
        </FavoritesPageFilterWrapper>
      )}
      <FilmsGrid
        films={shortFilms}
        loading={false}
        error={false}
        addToFavorites={addToFavs}
        checkExistance={checkExistance}
        removeFromFavorites={removeFromFavs}
      />
      {!!shortFilms.length && (
        <PaginationWrapper
          page={p}
          scrollTop
          error={false}
          loading={false}
          setPage={setPage}
          total={total}
        />
      )}
    </>
  )
}

export default FavoritesPage
