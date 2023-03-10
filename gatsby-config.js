/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: `job-board`,
    siteUrl: `https://job-board-sandy.vercel.app/`
  },
  // flags: {
  //   DEV_SSR: true
  // },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-pnpm-gatsby-5`,
    },
    // {
    //   resolve: 'gatsby-source-json',
    //   options: {
    //     // name the gatsby node
    //     name: 'swapi',
    //     // url for JSON endpoint
    //     uri: '',
    //     // Basic Auth if required (optional)
    //     // auth: {
    //     //   'xc-auth': process.env.XC_AUTH,
    //     // },
    //     // HTTP headers (optional)
    //     headers: {
    //       'accept': 'application/json',
    //       'xc-auth': `${process.env.XC_AUTH}`, // try by replacing with your own key
    //     },
    //     // image location to process images. Default: "image.url"
    //     // image_location: "image.url",
    //   }
    // },
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true,
        /**
         * @property {boolean} [isBaseProvider=false]
         * if true, will render `<ChakraBaseProvider>`
         */
        isBaseProvider: false,
      },
    },]
};
