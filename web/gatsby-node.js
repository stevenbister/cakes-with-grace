const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const RecipesPageTemplate = path.resolve('./src/templates/Recipe.js')
  const PageTemplate = path.resolve('./src/templates/Page.js')
  const PostTemplate = path.resolve('./src/templates/Post.js')

  const result = await graphql(`
   {
     allSanityRecipe(filter: {slug: {current: {ne: "null"}}}) {
        edges {
          node {
            id
            title
            slug {
              current
            }
          }
        }
      }
      allSanityPage(filter: {slug: {current: {ne: "null"}}}) {
        edges {
          node {
            id
            title
            slug {
              current
            }
          }
        }
      }
      allSanityPost(filter: {slug: {current: {ne: "null"}}}) {
        edges {
          node {
            id
            title
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  // Get the recipes and create a page
  const recipes = result.data.allSanityRecipe.edges || []
  recipes.forEach(recipe => {
    const { slug, id } = recipe.node
    
    createPage({
      path: `/recipes/${ slug.current }`,
      component: RecipesPageTemplate,
      // Pass the id through to the page template
      context: { id }
    })
  })

  // Get the pages and create a page
  const pages = result.data.allSanityPage.edges || []
  pages.forEach(page => {
    const { slug, id } = page.node

    createPage({
      path: slug.current,
      component: PageTemplate,
      context: { id }
    })
  })

  // Get the posts and create a page
  const posts = result.data.allSanityPost.edges || []
  posts.forEach(post => {
    const { slug, id } = post.node

    createPage({
      path: `/blog/${slug.current}`,
      component: PostTemplate,
      context: { id }
    })
  })
}
