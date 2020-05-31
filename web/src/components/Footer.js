import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query InstagramQuery {
      sanitySiteSettings(_id: {eq: "siteSettings"}) {
        instagram
      }
    }
  `)

  const { instagram } = data.sanitySiteSettings

  return (
    <footer>
      <p>&copy; { new Date().getFullYear() } Cakes with Grace</p>
      { instagram && <a href={ instagram }>Instagram</a> }
    </footer>
  )
}


export default Footer
