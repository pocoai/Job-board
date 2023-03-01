/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `job-board`,
    siteUrl: `https://www.yourdomain.tld`
  },
  flags: {
    DEV_SSR: true
  },
  plugins: [
    "gatsby-plugin-google-gtag",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-pnpm`,
      // options: {
      //   // projectPath: path.dirname(__dirname), // use parent directory as project root
      //   include: [
      //     `babel-plugin-lodash`, // <- resolve this package name
      //     `/home/amit/codelib/web/job-board/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash` // <- resolve from this directory
      //   ],
      //   // strict: true
      // }
    },
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