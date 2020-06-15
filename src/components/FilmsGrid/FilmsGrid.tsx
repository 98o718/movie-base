import React from 'react'
import { FilmsGridWrapper, FilmsGridNothingFound } from './FilmsGrid.styles'
import { ShortFilm } from '../../types'
import { FilmCard } from '..'
import { BarLoader } from 'react-spinners'
import { ActionTypes } from '../../model/types'

type FilmsGridProps = {
  films: ShortFilm[] | undefined
  loading: boolean
  error: boolean
  checkExistance?: (id: number) => boolean
  addToFavorites?: (film: ShortFilm) => ActionTypes
  removeFromFavorites?: (id: number) => ActionTypes
}

const FilmsGrid = ({
  films,
  error,
  loading,
  checkExistance,
  addToFavorites,
  removeFromFavorites,
}: FilmsGridProps) => {
  return (
    <>
      {loading ? (
        <BarLoader color="white" width="100%" />
      ) : (
        films !== undefined &&
        !error &&
        (!films.length ? (
          <FilmsGridNothingFound>Ничего нет</FilmsGridNothingFound>
        ) : (
          <FilmsGridWrapper>
            {films.map((film) => (
              <FilmCard
                key={film.id}
                {...film}
                addToFavorites={
                  film && addToFavorites
                    ? () => addToFavorites(film)
                    : undefined
                }
                removeFromFavorites={
                  film && removeFromFavorites
                    ? () => removeFromFavorites(film.id)
                    : undefined
                }
                isExist={checkExistance ? checkExistance(film.id) : undefined}
              />
            ))}
          </FilmsGridWrapper>
        ))
      )}
    </>
  )
}

export default FilmsGrid
