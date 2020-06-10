import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import Categories from './Categories'

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
              url
            }
          }
          publishedAt(formatString: "MMMM DD, YYYY")
        }
      }
    }
  `)

  const { id, title, slug, categories, mainImage } = data.allSanityPost.nodes

  return (
    <>
      <pre>{JSON.stringify(data, null, 4)}</pre>

      { data.allSanityPost.nodes.map( ({ id, title, slug, categories, mainImage, publishedAt }) => (
        // TODO: refactor this fella into it's own component
        <div key={ id }>
          <Link to={ `blog/${slug.current}` }>
            <h2>{ title }</h2>
            { publishedAt && <span>published { publishedAt }</span> }
            <Categories categories={ categories } />
          </Link>
        </div>
      )) }      
    </>
  )
}

export default PostsList
