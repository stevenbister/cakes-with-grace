import Img from 'gatsby-image'
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledHero = styled.header`
  grid-column: 1 / 4;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > .banner {
    height: 70vh;
    min-height: 500px;

    &::before {
      content: '';
      position: absolute;
      background: linear-gradient(0deg,rgba(31,28,38,.3) 60%,rgba(255,255,255,0) 100%);
      height: 100%;
      width: 100%;
      z-index: 1;
    }
  }

  > .hero__container {
    position: absolute;
    align-self: center;
    color: #fff;
    text-align: center;
    text-shadow: ${ props => props.theme.textShadow };
    /* z-index 2 so it appears over the psudeo element overlay */
    z-index: 2;
  }

  h1 {
    font-size: 3.75rem;
    line-height: 1;
  }

  p {
    font-size: 1.5rem;
    font-weight: 300;
    line-height: 1.3;
  }
`


const Hero = ({ title, img, alt, published }) => {
  return (
    <StyledHero>
      {img && <Img fluid={ img } alt={ alt } className='banner' />}
      <div className='hero__container'>
        <h1>{ title }</h1>
        { published && <p>Published<br />{ published }</p> }
      </div>
    </StyledHero>
  )
}

Hero.propTypes = {
  title: PropTypes.string,
  img: PropTypes.object,
  alt: PropTypes.string,
  published: PropTypes.string,
}

export default Hero