import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Logo from '../images/cakes-with-grace.svg'

const Header = ({siteTitle}) =>  (
    <header>
      <Link to='/'>
        <img src={Logo} alt={siteTitle} />
      </Link>
    </header>
  )


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
