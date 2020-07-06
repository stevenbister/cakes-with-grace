import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import Card from './Card'
import StyledList from './styles/PostsGrid'

const PostsList = () => {

  const data = useStaticQuery(graphql`
    query getPosts {
      allSanityPost {
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
          publishedAt(formatString: "MMMM DD, YYYY")
        }
      }
    }
  `)

  return (
    <StyledList>
      { data.allSanityPost.nodes.map( ({ id, title, slug, categories, mainImage, publishedAt }) => (
        // TODO: add publishedAt to component
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
  )
}

export default PostsList
