import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import Card from '../components/Card'

const RecipesList = () => {

  const data = useStaticQuery(graphql`
    query getRecipes {
      allSanityRecipe {
        nodes {
          id
          title
          slug {
            current
          }
          categories {
            title
            slug {
              current
            }
          }
          mainImage {
            asset {
              fluid(maxWidth: 300) {
                ...GatsbySanityImageFluid_withWebp
              }
            }
            alternativeText
          }
        }
      }
    }
  `)

  return (
    <>
      { data.allSanityRecipe.nodes.map( ({ id, title, slug, categories, mainImage }) => (
        <Card
          key={ id }
          title={ title }
          parent='recipes'
          slug={ slug }
          categories={ categories }
          image={ mainImage }
        />
      )) }      
    </>
  )
}

export default RecipesList
