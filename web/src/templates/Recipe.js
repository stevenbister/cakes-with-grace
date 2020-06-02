import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import BlockContent from '@sanity/block-content-to-react'

import ClientConfig from '../../client-config'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import Categories from '../components/Categories'

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

const RecipeTemplate = ({ data }) => {

  const { title, categories, timings, ingredients, mainImage, _rawMethod } = data.sanityRecipe

  return (
    <Layout>
      <SEO title={ title } />
      <h1>{ title }</h1>

      <Img fluid={ mainImage.asset.fluid } alt={ mainImage.alternativeText } />

      <Categories categories={ categories } />

      <h2>Timings</h2>
      <h3>Prep</h3>
      {/* TODO: create a function to work out hours/minutes if greater than 60mins */}
      <p>{ timings.prep } minutes</p>

      <h3>Cook</h3>
      <p>{ timings.cook } minutes</p>

      <h2>Ingredients</h2>
      <ul>
        {ingredients.map(ingredient => (
          <li key={ ingredient._key }>
            <span>{ ingredient.amount }</span> <span>{ ingredient.measurement }</span> <span>{ ingredient.name }</span>
          </li>
        ))}
      </ul>

      {/* TODO: Can defo refactor this into it's own component 
        as it'll be reused in the blog posts!! */}
        {/* Include the client config so we can render images without materializing the asset documents */}
      <BlockContent blocks={_rawMethod} {...ClientConfig.sanity} />
    </Layout>
  )
}


export default RecipeTemplate
export { query }
