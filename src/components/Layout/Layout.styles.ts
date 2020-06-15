import styled from '@emotion/styled'

export const LayoutWrapper = styled.div`
  display: flex;
  width: 100%;
  max-height: 100%;
  flex-direction: column;
  padding: 30px;
  padding-top: 60px;
  box-sizing: border-box;
  justify-content: center;

  @media (max-width: 576px) {
    padding: 10px;
    padding-top: 30px;
  }
`
