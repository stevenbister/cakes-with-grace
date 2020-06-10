import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Categories from '../components/Categories'
import PortableText from'../components/PortableText'
import GraphQLErrorList from '../components/GraphqlErrors'

const query = graphql`
  query($id: String!) {
    sanityPost(id: {eq: $id}) {
      title
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
      _rawBody
    }
  }
`

const PostTemplate = ({ data, errors }) => {
  const { title, categories, mainImage, _rawBody } = data.sanityPost
  
  return (
    <Layout>
      {/* Let's check for errors and return the error message */}
      { errors && <SEO title='GraphQL Error' /> }
      { errors && <GraphQLErrorList errors={errors} /> }

      {/* If there are no errors lets return the content as normal */}
      {/* TODO: Set up SEO fully */}
      { data.sanityPost && <SEO title={ title }/> }
      { data.sanityPost && (
          <>
            { title && <h1>{ title }</h1> }

            { mainImage && <Img fluid={ mainImage.asset.fluid } alt={ mainImage.alternativeText } /> }

            { categories && <Categories categories={ categories } /> }
            
            { _rawBody && <PortableText blocks={ _rawBody } /> }
          </>
      ) }       
    </Layout>
  )
}

PostTemplate.propTypes = {
  data: PropTypes.object,
}

export default PostTemplate
export { query }
