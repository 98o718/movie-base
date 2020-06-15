import styled from '@emotion/styled'

export const FilmDetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 15px; */
  width: 100%;
`

export const FilmDetailsPosterWrapper = styled.div`
  /* margin: 0 auto; */
  margin: 15px;
  width: 300px;
  height: 450px;
  border-radius: 15px;
  overflow: hidden;

  @media (max-width: 576px) {
    width: 250px;
    height: 375px;
  }
`

export const FilmDetailsTitle = styled.h1`
  color: white;
  margin: 0;
  margin-bottom: 15px;
  word-wrap: break-word;
  text-align: center;
`

export const FilmDetailsInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
  font-weight: bold;
`

export const FilmDetailsInfoHeading = styled.span`
  font-weight: normal;
  color: #cfd8dc;
`

export const FilmDetailsItem = styled.span`
  color: white;
`

export const FilmDetailsDescription = styled.p`
  color: white;
  word-wrap: break-word;
  max-width: 500px;
  font-weight: normal;
`
