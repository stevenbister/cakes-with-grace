import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const StyledNav = styled.nav`
  font-family: ${ props => props.theme.titleFont };
  padding: 0;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }

  li {
    padding: 0 1rem;
  }

  a {
    color: ${ props => props.theme.primaryColor };
    text-decoration: none;
    font-size: 1.25rem;
    line-height: 1.5;
    transition: 0.5s;

    &:hover {
      color: ${ props => props.theme.secondaryColor };
    }
  }
`

const Nav = () => {
  const data = useStaticQuery(graphql`
    query NavQuery {
      sanitySiteSettings {
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

  const { menu, instagram } = data.sanitySiteSettings

  return (
    <StyledNav>
      <ul>
        { menu && menu.map(({ internalLink }) => (
          <li key={ internalLink.id }>
            <Link to={ internalLink.slug.current }>
              { internalLink.title }
            </Link>
          </li>
        )) }
        
        { instagram && <li><a href={ instagram }>Instagram</a></li> }
        
      </ul>
    </StyledNav>
  )
}

export default Nav
