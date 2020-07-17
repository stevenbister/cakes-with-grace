import { graphql } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import GraphqlErrorList from '../components/GraphqlErrors'
import Hero from '../components/Hero'
import StyledArticle from '../components/styles/PageGrid'
import StyledList from '../components/styles/PostsGrid'
import Card from '../components/Card'

const query = graphql`
  query CategoryQuery($id: String!) {
    category: sanityCategory(id: {eq: $id}) {
      title
      slug {
        current
      }
      featureImage {
        asset {
          fluid(maxWidth: 400) {
            ...GatsbySanityImageFluid_withWebp
          }
        }
        alternativeText
      }
      posts {
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
            fluid(maxWidth: 700) {
              ...GatsbySanityImageFluid_withWebp
            }
          }
          alternativeText
        }
      }
      recipes {
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
            fluid(maxWidth: 700) {
              ...GatsbySanityImageFluid_withWebp
            }
          }
          alternativeText
        }
      }
    }
  }
`

const StyledH2 = styled.h2`
  text-align: center;
  margin-top: ${ props => props.theme.gridPaddingTop };
`

const PageTemplate = ({ data, errors }) => {
  const { title, featureImage, posts, recipes } = data.category

  const image = featureImage && featureImage.asset.fluid
  const alt = featureImage && featureImage.alternativeText

  return (
    <Layout>
      <StyledArticle size="wide" >
        {/* Let's check for errors and return the error message */}
        { errors && <SEO title='GraphQL Error' /> }
        { errors && <GraphqlErrorList errors={errors} /> }

        {/* If there are no errors lets return the content as normal */}
        {/* TODO: Set up SEO fully */}
        { data.category && <SEO title={ title }/> }
        { data.category && (
            <>
              { title &&
                <Hero
                  title={ title }
                  img={ image }
                  alt={ alt }
                  />
                }
            </>
        ) }

        <StyledH2>Blog posts</StyledH2>
        <StyledList>
          { posts.map( ({ id, title, slug, categories, mainImage }) => (

            <Card
              key={ id }
              title={ title }
              parent='blog'
              slug={ slug }
              categories={ categories }
              image={ mainImage }
            />
          )) }
        </StyledList>

        <StyledH2>Recipes</StyledH2>
        <StyledList>
          { recipes.map( ({ id, title, slug, categories, mainImage }) => (

            <Card
              key={ id }
              title={ title }
              parent='recipes'
              slug={ slug }
              categories={ categories }
              image={ mainImage }
            />
          )) }
        </StyledList>

      </StyledArticle>
    </Layout>
  )
}

PageTemplate.propTypes = {
  data: PropTypes.object,
}

export default PageTemplate
export { query }
