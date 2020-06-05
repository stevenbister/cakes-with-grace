import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Categories from '../components/Categories'
import PortableText from'../components/PortableText'


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
      {/* TODO: Add error handling to ALL templates */}
      <SEO title={ title }/>
      <h1>{ title }</h1>

      {mainImage && <Img fluid={ mainImage.asset.fluid } alt={ mainImage.alternativeText } /> }
      

      <Categories categories={ categories } />

      <PortableText blocks={ _rawBody } />
    </Layout>
  )
}

export default PostTemplate
export { query }
