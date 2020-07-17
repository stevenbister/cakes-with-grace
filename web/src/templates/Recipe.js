import { graphql } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Categories from '../components/Categories'
import PortableText from '../components/PortableText'
import GraphqlErrorList from '../components/GraphqlErrors'
import Hero from '../components/Hero'
import Timings from '../components/Timings'
import StyledArticle from '../components/styles/PageGrid'

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
          fluid {
            ...GatsbySanityImageFluid_withWebp
          }
        }
        alternativeText
      }
      _rawMethod
      publishedAt(formatString: "MMMM DD, YYYY")
    }
  }
`

const RecipeTemplate = ({ data, errors }) => {

  const { title, categories, timings, ingredients, mainImage, publishedAt, _rawMethod } = data.sanityRecipe

  return (
    <Layout>
      <StyledArticle>
        {/* Let's check for errors and return the error message */}
        { errors && <SEO title='GraphQL Error' /> }
        { errors && <GraphqlErrorList errors={ errors } /> }

        {/* If there are no errors lets return the content as normal */}
        {/* TODO: Set up SEO fully */}
        { data.sanityRecipe && <SEO title={ title } /> }
        { data.sanityRecipe && (
          <>
            { title &&
              <Hero
                title={ title }
                img={ mainImage.asset.fluid }
                alt={ mainImage.alternativeText }
                published={ publishedAt } />
              }

            {/* ? Can I pass the parent more intelligently? */}
            { categories && <Categories parent='recipes' categories={ categories } />}

            { timings && <Timings prep={ timings.prep } cook={ timings.cook } /> }

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
      </StyledArticle>
    </Layout>
  )
}

RecipeTemplate.propTypes = {
  data: PropTypes.object,
}

export default RecipeTemplate
export { query }
