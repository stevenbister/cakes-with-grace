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
        name: `Cakes with Grace`,
        short_name: `Cakes`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/Favicon.png`, // This path is relative to the root of the site.
      },
    },
    // Google fonts
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Lalezar`,
          `source sans pro\:300,400`
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
