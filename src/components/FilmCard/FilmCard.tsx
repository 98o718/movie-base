import React from 'react'
import {
  FilmCardWrapper,
  FilmCardTitle,
  FilmCardAddition,
  FilmCardPosterWrapper,
  FavButton,
} from './FilmCard.styles'
import { ShortFilm } from '../../types'
import { Image } from '..'
import { ClassNames } from '@emotion/core'
import { useLocation } from 'wouter'
import { IconButton } from '@material-ui/core'
import { StarBorder, Star } from '@material-ui/icons'
import { ActionTypes } from '../../model/types'

type FilmCardProps = {
  isExist?: boolean
  addToFavorites?: () => ActionTypes
  removeFromFavorites?: () => ActionTypes
}

const FilmCard = ({
  poster,
  releaseDate,
  title,
  id,
  isExist,
  addToFavorites,
  removeFromFavorites,
}: ShortFilm & FilmCardProps) => {
  const [, setLocation] = useLocation()
  return (
    <FilmCardWrapper>
      <FilmCardPosterWrapper>
        <FavButton>
          <IconButton
            aria-label="add to / remove from favorite"
            onClick={() =>
              isExist
                ? removeFromFavorites && removeFromFavorites()
                : addToFavorites && addToFavorites()
            }
          >
            {isExist ? (
              <Star style={{ fill: '#faee1c' }} />
            ) : (
              <StarBorder style={{ fill: '#faee1c' }} />
            )}
          </IconButton>
        </FavButton>
        <ClassNames>
          {({ css }) => (
            <Image
              className={css`
                transition: 0.2s ease;
                cursor: pointer;

                &:hover {
                  transform: scale(1.1);
                }
              `}
              src={
                !poster
                  ? require('../../assets/no-poster.jpg')
                  : `${process.env.REACT_APP_MINIPOSTER_URL}${poster}`
              }
              alt="Film's poster"
              onClick={() => setLocation(`/film/${id}`)}
            />
          )}
        </ClassNames>
      </FilmCardPosterWrapper>
      <FilmCardTitle onClick={() => setLocation(`/film/${id}`)}>
        {title}
      </FilmCardTitle>
      {releaseDate && (
        <FilmCardAddition>{releaseDate.slice(0, 4)}</FilmCardAddition>
      )}
    </FilmCardWrapper>
  )
}

export default FilmCard
