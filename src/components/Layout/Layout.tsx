import React from 'react'
import { LayoutWrapper } from './Layout.styles'

const Layout: React.FC = ({ children }) => {
  return <LayoutWrapper>{children}</LayoutWrapper>
}

export default Layout
