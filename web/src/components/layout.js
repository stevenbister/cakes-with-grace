import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'

import Header from './Header'
import Footer from './footer'
import Theme from './styles/Theme'
import GlobalStyle from './styles/GlobalStyles'

// TODO: Remove this maybe?
// const Styledlayout = styled.main`
//   display: grid;
//   grid-template-columns: 1fr minmax(480px, 10fr) 1fr;

//   > * {
//     grid-column: 1 / 4;
//     width: 100%;
//   }
// `

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

      <main>{children}</main>

      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
