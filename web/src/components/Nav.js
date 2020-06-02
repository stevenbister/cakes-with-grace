import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'

// TODO: Style this boi

const Nav = () => {
  const data = useStaticQuery(graphql`
    query NavQuery {
      sanitySiteSettings(_id: {eq: "siteSettings"}) {
        menu {
          internalLink {
            ...on SanityCategory {
              id
              title
              slug {
                current
              }
            }
            ...on SanityPage {
              id
              title
              slug {
                current
              }
            }
            ...on SanityPost {
              id
              title
              slug {
                current
              }
            }
            ...on SanityRecipe {
              id
              title
              slug {
                current
              }
            }
          }
        }
        instagram
      }
    }
  `)

  const { menu, instagram } = data.sanitySiteSettings;

  return (
    <nav>
      <ul>

        {menu.map(({ internalLink }) => (
          <li key={ internalLink.id }>
            <Link to={ internalLink.slug.current }>
              { internalLink.title }
            </Link>
          </li>
        ))}
        
        { instagram && <li><a href={ instagram }>Instagram</a></li> }
        
      </ul>
    </nav>
  )
}

export default Nav
