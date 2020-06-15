import React from 'react'
import {
  HeaderWrapper,
  HeaderHeading,
  HeaderLink,
  HeaderPanel,
} from './Header.styles'
import { useLocation, Link } from 'wouter'
import { SearchBox } from '..'
import { useSearchBox } from '../../hooks'

const Header = () => {
  const [, setLocation] = useLocation()
  const searchBoxProps = useSearchBox()

  return (
    <HeaderWrapper>
      <HeaderHeading onClick={() => setLocation('/')}>
        <span role="img" aria-label="Logo">
          🎬
        </span>
      </HeaderHeading>
      <HeaderPanel>
        <Link to="/favorites">
          <HeaderLink>ИЗБРАННЫЕ&nbsp;★</HeaderLink>
        </Link>
        <SearchBox {...searchBoxProps} />
      </HeaderPanel>
    </HeaderWrapper>
  )
}

export default Header
