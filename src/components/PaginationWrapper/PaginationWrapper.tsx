import React, { useState, useEffect } from 'react'
import { ClassNames } from '@emotion/core'
import { Pagination } from '@material-ui/lab'

type PaginationWrapperProps = {
  loading: boolean
  error: boolean
  total: number
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  scrollTop?: boolean
}

const PaginationWrapper = ({
  loading,
  error,
  total,
  page,
  setPage,
  scrollTop = false,
}: PaginationWrapperProps) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleResize = () => setWindowWidth(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <ClassNames>
      {({ css }) =>
        !loading &&
        !error && (
          <Pagination
            className={css`
              width: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-top: 30px;

              .MuiPaginationItem-root {
                color: white;
              }
            `}
            count={total}
            page={page}
            siblingCount={windowWidth >= 576 ? 1 : 0}
            onChange={(e, num) => {
              if (scrollTop) window.scrollTo(0, 0)
              setPage(num)
            }}
          />
        )
      }
    </ClassNames>
  )
}

export default PaginationWrapper
