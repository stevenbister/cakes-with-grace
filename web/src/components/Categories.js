import { Link } from 'gatsby'
import React from 'react'

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

export default Categories
