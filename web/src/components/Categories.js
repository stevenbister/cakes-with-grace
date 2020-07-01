import { Link } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { capitalise } from '../helpers'

const StyledCategoryList = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 1rem 0;
  }

  li {
    display: inline-flex;
    margin: 0;

    &:not(:last-child)::after {
      content: '/';
      padding: 0 0.375rem;
    }
  }

  a {
    color: ${ props => props.theme.secondaryColor };

    &:hover {
      text-decoration: none;
    }
  }
`

const Categories = ({ parent, categories }) => (
  <StyledCategoryList aria-label='categories'>
    <ul>
      { parent && <li><Link to={ parent }>{ capitalise(parent) }</Link></li> }
      {categories.map(category => (
        <>
          <li key={ category._key }>
            <Link to={ category.slug.current }>{ category.title }</Link>
          </li>
        </>
      ))}
    </ul>
  </StyledCategoryList>
)

Categories.propTypes = {
  categories: PropTypes.array,
  parent: PropTypes.string,
}

export default Categories
