import {glConfig} from "./src/config"
import type { GatsbyConfig } from "gatsby"

const siteTitle = glConfig.siteTitle
const siteDescription = glConfig.siteDescription
const siteUrl = glConfig.siteUrl
const siteIcon = glConfig.siteIcon
const siteImage = glConfig.siteImage
const siteTheme = glConfig.siteTheme
const siteKeywords = glConfig.siteKeywords
const siteEmail = glConfig.siteEmail
const siteDisplayname = glConfig.siteDisplayname

const siteMetadata: any =  {
  version: glConfig.version,
  siteTitle,
  siteEmail,
  siteDisplayname,
  title: siteTitle,
  siteUrl,
  siteDescription,
  description: siteDescription,
  siteIcon,
  siteImage,
  image: siteImage,
  siteKeywords,
  siteTheme,
}
const config: GatsbyConfig = {
  siteMetadata,
  graphqlTypegen: false,
  plugins: [
    { resolve: 'gatsby-plugin-next-seo'},
    { resolve: 'gatsby-plugin-manifest',
      options: {
        start_url: `/`,
        display: `standalone`,
        name: siteTitle,
        short_name: siteTitle,
        icon: `./static${siteIcon}`,
        background_color: siteTheme,
        theme_color: siteTheme,
      }
    },
    { 
      resolve: `gatsby-plugin-offline`,
      // options: {
      //   appendScript: require.resolve(`./src/custom-sw-code.js`),
      // },
    },
    { resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
      __key: "markdown"
    },
    { resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-remark",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ]
}
export default config
