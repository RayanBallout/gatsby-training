/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Simply Recipes',
    description: 'Nice and clean recipes site',
    author: '@johnsmilga',
    person: {
      name: "john",
      age: 32
    },
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `a58g7tp6hpyl`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENFUL_API_KEY,
      },
    },
  ],
}
