import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Categories from '../components/Categories'
import PortableText from '../components/PortableText'
import GraphqlErrorList from '../components/GraphqlErrors'

const query = graphql`
  query($id: String!) {
    sanityRecipe(id: {eq: $id}) {
      title
      categories {
        title
        slug {
          current
        }
        _key
      }
      timings {
        cook
        prep
      }
      ingredients {
        amount
        measurement
        name
        _key
      }
      mainImage {
        asset {
          fluid(maxWidth: 700) {
            ...GatsbySanityImageFluid_withWebp
          }
        }
        alternativeText
      }
      _rawMethod
    }
  }
`

// Check if the value passed is greater than one and add n 's' to the end of the string if true
const isPlural = ( val, string ) => val > 1 ? `${string}s` : `${string}`;

const minutesToHours = ( mins ) => {
  // Check if mins are greather than 60
  if ( mins > 60 ) {
    // Get the number of hours within the minutes and round down to remove the remainder
    const hours = (mins / 60);
    const roundHours = Math.floor(hours);
    // Take the remainder hours and multiply them by 60 to get the minutes within the hour
    const minutes = (hours - roundHours) * 60;
    const roundMinutes = Math.floor(minutes);
  
    return `${roundHours} ${isPlural(roundHours, 'hour')}, ${roundMinutes} ${isPlural(roundMinutes, 'minute')}`
  }
  return `${mins} ${isPlural(mins, 'minute')}`
}

const RecipeTemplate = ({ data, errors }) => {

  const { title, categories, timings, ingredients, mainImage, _rawMethod } = data.sanityRecipe

  return (
    <Layout>
      {/* Let's check for errors and return the error message */}
      { errors && <SEO title='GraphQL Error' /> }
      { errors && <GraphqlErrorList errors={errors} /> }

      {/* If there are no errors lets return the content as normal */}
      {/* TODO: Set up SEO fully */}
      { data.sanityRecipe && <SEO title={ title } /> }
      { data.sanityRecipe && (
        <>
          { title && <h1>{ title }</h1> }

          { mainImage && <Img fluid={ mainImage.asset.fluid } alt={ mainImage.alternativeText } /> }

          { categories && <Categories categories={ categories } /> }

          { timings && (
            <>
              <h2>Timings</h2>

              <h3>Prep</h3>
              <p>{ minutesToHours(timings.prep) }</p>

              <h3>Cook</h3>
              <p>{ minutesToHours(timings.cook) }</p>
            </>
          ) }

          { ingredients && (
            <>
              <h2>Ingredients</h2>
              <ul>
                {ingredients.map(ingredient => (
                  <li key={ ingredient._key }>
                    <span>{ ingredient.amount }</span> <span>{ ingredient.measurement }</span> <span>{ ingredient.name }</span>
                  </li>
                ))}
              </ul>
            </>
          ) }

          { _rawMethod && <PortableText blocks={_rawMethod} /> }
        </>
      ) }
    </Layout>
  )
}

RecipeTemplate.propTypes = {
  data: PropTypes.object,
}

export default RecipeTemplate
export { query }
