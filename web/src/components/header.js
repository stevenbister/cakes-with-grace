import { Link, graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import React from 'react'

import Nav from './Nav'

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3.1875rem;

  @media (max-width: 400px) {
    padding: 2rem;
  }

  > a {
    margin-bottom: 1rem;
  }

  img {
    max-width: 412px;
    width: 100%;
  }
`

const Header = () => {
  const data = useStaticQuery(graphql`
    query SettingsQuery {
      sanitySiteSettings {
        siteName
        siteLogo {
          asset {
            url
          }
        }
      }
    }
  `)

  const { siteName, siteLogo } = data.sanitySiteSettings
  const logo = siteLogo.asset.url

  return (
    <StyledHeader>
      <Link to='/'>
        { logo ? <img src={ logo } alt={ siteName } /> : siteName }
      </Link>

      <Nav />
    </StyledHeader>
  )
}

export default Header
