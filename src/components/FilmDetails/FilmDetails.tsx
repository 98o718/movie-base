import React from 'react'
import {
  FilmDetailsWrapper,
  FilmDetailsTitle,
  FilmDetailsPosterWrapper,
  FilmDetailsInfo,
  FilmDetailsItem,
  FilmDetailsDescription,
  FilmDetailsInfoHeading,
} from './FilmDetails.styles'
import { Details, Film } from '../../types'
import { Image } from '..'
import { Button } from '@material-ui/core'
import { ActionTypes } from '../../model/types'

type FilmDetailsProps = {
  film: Details
  addToFavs?: (film: Film | Details) => ActionTypes
  removeFromFavs?: (id: number) => ActionTypes
  isExist: boolean
}

const FilmDetails = ({
  film,
  addToFavs,
  isExist,
  removeFromFavs,
}: FilmDetailsProps) => {
  return (
    <>
      <FilmDetailsTitle>{film.title}</FilmDetailsTitle>
      <FilmDetailsWrapper>
        <FilmDetailsPosterWrapper>
          <Image
            src={
              film.poster_path
                ? `${process.env.REACT_APP_POSTER_URL}${film.poster_path}`
                : require('../../assets/no-poster.jpg')
            }
          />
        </FilmDetailsPosterWrapper>
        <FilmDetailsInfo>
          {film.release_date && (
            <FilmDetailsItem>
              <FilmDetailsInfoHeading>год:</FilmDetailsInfoHeading>{' '}
              {film.release_date.slice(0, 4)}
            </FilmDetailsItem>
          )}
          {!!film.production_countries.length && (
            <FilmDetailsItem>
              <FilmDetailsInfoHeading>страна:</FilmDetailsInfoHeading>{' '}
              {
                film.production_countries.reduce((acc, current) => ({
                  name: acc.name + `, ${current.name}`,
                  iso_3166_1: '',
                })).name
              }
            </FilmDetailsItem>
          )}
          {!!film.genres.length && (
            <FilmDetailsItem>
              <FilmDetailsInfoHeading>жанр:</FilmDetailsInfoHeading>{' '}
              {
                film.genres.reduce((acc, current) => ({
                  name: acc.name + `, ${current.name}`,
                  id: 1,
                })).name
              }
            </FilmDetailsItem>
          )}
          {film.runtime && (
            <FilmDetailsItem>
              <FilmDetailsInfoHeading>
                продолжительность:
              </FilmDetailsInfoHeading>{' '}
              {Math.floor(film.runtime / 60) > 0
                ? `${Math.floor(film.runtime / 60)} ч ${film.runtime % 60}`
                : film.runtime}{' '}
              мин
            </FilmDetailsItem>
          )}
          {film.overview && (
            <FilmDetailsDescription>{film.overview}</FilmDetailsDescription>
          )}
          {addToFavs && !isExist && (
            <Button
              style={{ width: 'fit-content', marginTop: 15 }}
              variant="outlined"
              color="secondary"
              onClick={() => addToFavs(film)}
            >
              Добавить в избранное
            </Button>
          )}
          {removeFromFavs && isExist && (
            <Button
              style={{ width: 'fit-content', marginTop: 15 }}
              variant="outlined"
              color="secondary"
              onClick={() => removeFromFavs(film.id)}
            >
              Убрать из избранного
            </Button>
          )}
        </FilmDetailsInfo>
      </FilmDetailsWrapper>
    </>
  )
}

export default FilmDetails
