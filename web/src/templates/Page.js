import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import PortableText from '../components/PortableText'
import GraphqlErrorList from '../components/GraphqlErrors'
import Hero from '../components/Hero'
import PostsList from '../components/PostsList'
import RecipesList from '../components/RecipesList'
import StyledArticle from '../components/styles/PageGrid'

const query = graphql`
  query PageQuery($id: String!) {
    sanityPage(id: {eq: $id}) {
      title
      slug {
        current
      }
      mainImage {
        asset {
          fluid {
            ...GatsbySanityImageFluid_withWebp
          }
        }
        alternativeText
      }
      _rawBody
    }
  }
`

const PageTemplate = ({ data, errors }) => {
  const { title, mainImage, _rawBody } = data.sanityPage

  const image = mainImage && mainImage.asset.fluid
  const alt = mainImage && mainImage.alternativeText

  return (
    <Layout>
      <StyledArticle size="wide" >
        {/* Let's check for errors and return the error message */}
        { errors && <SEO title='GraphQL Error' /> }
        { errors && <GraphqlErrorList errors={errors} /> }

        {/* If there are no errors lets return the content as normal */}
        {/* TODO: Set up SEO fully */}
        { data.sanityPage && <SEO title={ title }/> }
        { data.sanityPage && (
            <>
              { title &&
                <Hero
                  title={ title }
                  img={ image }
                  alt={ alt }
                  />
                }

              { _rawBody && <PortableText blocks={ _rawBody } /> }

              { title === 'Blog' && <PostsList /> }

              { title === 'Recipes' && <RecipesList />}
            </>
        ) }
      </StyledArticle>
    </Layout>
  )
}

PageTemplate.propTypes = {
  data: PropTypes.object,
}

export default PageTemplate
export { query }
