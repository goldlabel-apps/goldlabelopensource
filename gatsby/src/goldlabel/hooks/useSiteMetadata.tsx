import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          twitterUsername
          image
          siteUrl
          siteDescription
          siteIcon
          siteImage
          siteKeywords
          siteTheme
          siteTitle
          siteTwitter
          siteDefaultLocale
        }
      }
    }
  `)
  return data.site.siteMetadata
}