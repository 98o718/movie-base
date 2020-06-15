import styled from '@emotion/styled'

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  background-color: #581b98;
  padding: 0 30px;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 576px) {
    flex-direction: column;
    height: auto;
    padding: 15px;
  }
`

export const HeaderHeading = styled.h1`
  color: white;
  cursor: pointer;
  transition: 0.2s;
  user-select: none;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 576px) {
    margin: 0;
  }
`

export const HeaderLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: 0.2s;
  margin: 30px;

  &:hover {
    color: #faee1c;
  }
`

export const HeaderPanel = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 576px) {
    flex-direction: column;
    height: auto;
  }
`
