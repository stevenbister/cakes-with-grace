import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from "react"
import BlockContent from '@sanity/block-content-to-react'

import Layout from "../components/Layout"
import SEO from "../components/seo"

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

  const { title, categories, timings, ingredients, mainImage } = data.sanityRecipe

  return (
    <Layout>
      <SEO title={ title } />
      <h1>{ title }</h1>

      <Img fluid={ mainImage.asset.fluid } alt={ mainImage.alternativeText } />

      {/* 
        TODO: Can defo refactor this into it's own component 
        as it'll be reused in the blog posts!!
      */}
      <nav aria-label="categories">
        <ul>
          {categories.map(category => (
            <li key={ category._key }>
              <Link to={ category.slug.current }>{ category.title }</Link>
            </li>
          ))}
        </ul>
      </nav>

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

      {/* TODO: Sort this */}
      {/* <BlockContent blocks /> */}
    </Layout>
  )
}


export default RecipeTemplate
export { query }
