import styled from '@emotion/styled'

export const FilmCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: 0 auto;
`

export const FilmCardPosterWrapper = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 15px;
  overflow: hidden;
  position: relative;

  &:hover + h3 {
    color: #faee1c;
  }
`

export const FavButton = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 10;
`

export const FilmCardTitle = styled.h3`
  color: white;
  font-size: 15px;
  margin-bottom: 5px;
  cursor: pointer;
  width: fit-content;
  transition: 0.2s;

  &:hover {
    color: #faee1c;
  }
`

export const FilmCardAddition = styled.h4`
  color: #cfd8dc;
  font-size: 12px;
  margin-top: 0;
`
