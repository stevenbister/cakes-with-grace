import { Link } from 'gatsby'
import React from 'react'
import PropTypes, { array } from 'prop-types'

const Categories = ({ categories }) => (
  <nav aria-label='categories'>
    <ul>
      {categories.map(category => (
        <li key={ category._key }>
          <Link to={ category.slug.current }>{ category.title }</Link>
        </li>
      ))}
    </ul>
  </nav>
)

Categories.propTypes = {
  categories: array
}

export default Categories
