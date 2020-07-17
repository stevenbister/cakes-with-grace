import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import InstaLogo from '../images/instagram-logo.svg'

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 1.25rem 2.8125rem;

  @media (max-width: 400px) {
    padding: 1.25rem 2rem;
  }

  p {
    margin: 0;
  }

  img {
    width: 25px;
    height: 25px;
  }
`

const Footer = () => {
  const data = useStaticQuery(graphql`
    query InstagramQuery {
      sanitySiteSettings {
        instagram
      }
    }
  `)

  const { instagram } = data.sanitySiteSettings

  return (
    <StyledFooter>
      <p>&copy; { new Date().getFullYear() } Cakes with Grace</p>
      { instagram && <a href={ instagram }><img src={InstaLogo} alt="Instagram" /></a> }
    </StyledFooter>
  )
}

export default Footer
