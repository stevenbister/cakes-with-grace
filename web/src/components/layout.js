import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'

import Header from './Header'
import Footer from './footer'
import Theme from './styles/Theme'
import GlobalStyle from './styles/GlobalStyles'

const Styledlayout = styled.main`
  display: grid;
  grid-template-columns: 1fr minmax(480px, 10fr) 1fr;

  > * {
    grid-column: 2 / 3;
    width: 100%;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={ Theme }>
      <GlobalStyle />
      
      <Header />
      
      <Styledlayout>{children}</Styledlayout>
      
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
