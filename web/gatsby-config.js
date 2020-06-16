require('dotenv').config()
const ClientConfig = require('./client-config')

module.exports = {
  siteMetadata: {
    title: `Cakes with Grace`,
    description: ``,
    author: ``,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // Google fonts
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Lalezar`,
          `source sans pro\:400`
        ],
        display: `swap`
      }
    },
    // Connect to Sanity.io
    {
      resolve: `gatsby-source-sanity`,
      options: {
        ...ClientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
