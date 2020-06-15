import React from 'react'
import { useFilmDetails } from '../../hooks'
import { FilmDetails } from '../../components'
import { BarLoader } from 'react-spinners'
import { Helmet } from 'react-helmet'

const FilmDetailsPage = ({ id }: { id: number }) => {
  const { film, ...filmDetailsProps } = useFilmDetails(id)

  return (
    <>
      <Helmet>
        <title>{film ? `${film.title} – ` : ''}The Movie Base</title>
      </Helmet>
      {filmDetailsProps.loading ? (
        <BarLoader color="white" width="100%" />
      ) : (
        film !== undefined &&
        !filmDetailsProps.error && (
          <FilmDetails film={film} {...filmDetailsProps} />
        )
      )}
    </>
  )
}

export default FilmDetailsPage
