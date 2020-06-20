import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import PortableText from '../components/PortableText'
import GraphqlErrorList from '../components/GraphqlErrors'
import PostsList from '../components/PostsList'
import RecipesList from '../components/RecipesList'

const query = graphql`
  query PageQuery($id: String!) {
    sanityPage(id: {eq: $id}) {
      title
      slug {
        current
      }
      mainImage {
        asset {
          url
        }
        alternativeText
      }
      _rawBody
    }
  }
`

const PageTemplate = ({ data, errors }) => {
  const { title, mainImage, _rawBody } = data.sanityPage

  return (
    <Layout>
      {/* Let's check for errors and return the error message */}
      { errors && <SEO title='GraphQL Error' /> }
      { errors && <GraphqlErrorList errors={errors} /> }

      {/* If there are no errors lets return the content as normal */}
      {/* TODO: Set up SEO fully */}
      { data.sanityPage && <SEO title={ title }/> }
      { data.sanityPage && (
          <>
            { title && <h1>{ title }</h1> }

            { mainImage && <Img fluid={ mainImage.asset.fluid } alt={ mainImage.alternativeText } /> }
            
            { _rawBody && <PortableText blocks={ _rawBody } /> }

            { title === 'Blog' && <PostsList /> }
            
            { title === 'Recipes' && <RecipesList />}
          </>
      ) }  
    </Layout>
  )
}

PageTemplate.propTypes = {
  data: PropTypes.object,
}

export default PageTemplate
export { query }
