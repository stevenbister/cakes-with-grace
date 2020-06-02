import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Logo from '../images/cakes-with-grace.svg'
import Nav from './Nav'

const Header = ({siteTitle}) =>  (
  <header>
    <Link to='/'>
      <img src={Logo} alt={siteTitle} />
    </Link>

    <Nav />
  </header>
)


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
