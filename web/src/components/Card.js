import { Link } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Categories from './Categories'

const StyledCard = styled.article`
 --image-height: 370px;

  position: relative;
  text-align: center;

  .card-image {
    height: var(--image-height);
  }

  > a {
    text-decoration: none;
    color: inherit;
    display: grid;
    grid-template-rows: repeat(5, calc(var(--image-height)/4));
  }

  header {
    grid-row: 4 / 6;
    justify-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #fff;
    width: 90%;
    padding: 0 1rem;
    z-index: 1;
    box-shadow: 0 5px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);

    /* TODO: Add hover styles */
  }
`

const Card = ({ title, parent, slug, categories, image }) => (
  <StyledCard>
    <Link to={ `${parent}/${slug.current}` }>
      <Img fluid={ image.asset.fluid } alt={ image.alternativeText } className='card-image' />
      <header>
        <h2>{ title }</h2>
        { categories && <Categories categories={ categories } />}
      </header>
    </Link>
  </StyledCard>
)

Card.propTypes = {
  title: PropTypes.string.isRequired,
  parent: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  categories: PropTypes.array,
  image: PropTypes.object.isRequired
}

export default Card