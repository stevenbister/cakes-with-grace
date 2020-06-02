const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const RecipesPageTemplate = path.resolve('./src/templates/Recipe.js')

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
    }
  `)

  if (result.errors) throw result.errors

  const recipes = result.data.allSanityRecipe.edges || []
  recipes.forEach(recipe => {
    const { slug, id } = recipe.node
    
    createPage({
      path: `/recipes/${ slug.current }`,
      component: RecipesPageTemplate,
      // Pass the id through to the page template
      context: { id: id }
    })
  });
}
