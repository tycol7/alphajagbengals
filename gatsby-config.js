/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-next-seo`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Amatic SC\:400,700`,
          `Pacifico`,
          `source sans pro\:400,600` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: "src/images/gatsby-icon.png"
      }
    }
  ],
}
