import React from 'react'
import Img from 'gatsby-image'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'
import styled from 'styled-components'
// ? Why don't the .env values pass correctly? - How do I fix this?
import ClientConfig from '../../client-config'

const StyledFigure = styled.figure`
  max-width: 50%;
`

export default ({ node }) => {
  console.log(node);

  if (!node || !node.asset || !node.asset._ref) {return null}

  const fluidProps = getFluidGatsbyImage(
    node.asset._ref,
    { maxWidth: 520 },
    ClientConfig.sanity
  )

  return (
    <StyledFigure>
      <Img fluid={ fluidProps } alt={ node.alt } />
    </StyledFigure>
  )
}
