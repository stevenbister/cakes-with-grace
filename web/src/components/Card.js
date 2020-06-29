import { Link } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Categories from './Categories'

const StyledCard = styled.article`
  border: solid 1px ${ props => props.theme.secondaryColor };
  border-radius: 5px;
  text-align: center;

  a {
    text-decoration: none;
    color: inherit;
  }
`

const Card = ({ title, parent, slug, categories, image }) => (
  <StyledCard>
    <Link to={ `${parent}/${slug.current}` }>
      <Img fluid={ image.asset.fluid } alt={ image.alternativeText } />
      <h2>{ title }</h2>
      <Categories categories={ categories } />
    </Link>
  </StyledCard>
)

Card.propTypes = {
  title: PropTypes.string,
  parent: PropTypes.string,
  slug: PropTypes.string,
  categories: PropTypes.array,
  image: PropTypes.object
}

export default Card