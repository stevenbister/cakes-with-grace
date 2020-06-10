import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Nav from './Nav'

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
    <header>
      <Link to='/'>
        { logo ? <img src={ logo } alt={ siteName } /> : siteName }
      </Link>

      <Nav />
  </header>
  )
}

export default Header
