import { Link } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledCategoryList = styled.nav`
  ul {
    list-style: none;
    padding: 0;

    a {
      color: ${ props => props.theme.secondaryColor };
    }
  }
`

const Categories = ({ categories }) => (
  <StyledCategoryList aria-label='categories'>
    <ul>
      {categories.map(category => (
        <li key={ category._key }>
          <Link to={ category.slug.current }>{ category.title }</Link>
        </li>
      ))}
    </ul>
  </StyledCategoryList>
)

Categories.propTypes = {
  categories: PropTypes.array
}

export default Categories
