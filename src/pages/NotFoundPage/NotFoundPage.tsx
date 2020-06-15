import React from 'react'
import { NotFoundPageWrapper, NotFoundPageMessage } from './NotFoundPage.styles'

const NotFoundPage = () => {
  return (
    <NotFoundPageWrapper>
      <NotFoundPageMessage>
        <span role="img" aria-label="sad emoji">
          😟
        </span>{' '}
        404{' '}
        <span role="img" aria-label="sad emoji">
          😟
        </span>
      </NotFoundPageMessage>
    </NotFoundPageWrapper>
  )
}

export default NotFoundPage
