import styled from '@emotion/styled'

export const FilmsGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 15px;
  width: 100%;
`

export const FilmsGridNothingFound = styled.h2`
  color: white;
  text-align: center;
`
