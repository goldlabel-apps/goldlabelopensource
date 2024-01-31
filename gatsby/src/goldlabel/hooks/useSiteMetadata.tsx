import { graphql, useStaticQuery } from "gatsby"
export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          version,
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
          siteFacebook
          siteEmail
          siteDisplayname
        }
      }
    }
  `)
  return data.site.siteMetadata
}