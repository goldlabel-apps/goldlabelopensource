import React from "react"
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import { useSiteMetadata } from "../core"

export const SEO = (props: any) => {
  const {appData} = props
  const siteMetadata = useSiteMetadata()
  let defaultTitle = ""
  const { 
    siteUrl, 
    siteKeywords,
    twitterUsername,
    siteImage,
    siteTitle,
    siteDescription,
  } = siteMetadata
  const siteName = defaultTitle
  const seo = {
    title: `${siteTitle} ${siteDescription}`,
    description: siteDescription,
    image: siteImage,
    url: siteUrl,
    twitterUsername,
    keywords: siteKeywords,
  }
  if (appData){
    if (appData.data){
      const {markdownRemark} = appData.data
      if (markdownRemark){
        const {frontmatter} = markdownRemark
        if (frontmatter){
          const { path, title, description,
            keywords, image,
          } = frontmatter
          seo.url = `${siteUrl}${path}`
          seo.title = `${title} ${description}`
          if(title === "Home") seo.title = description
          seo.description = description
          seo.image = `${siteUrl}${image}`
          seo.keywords = keywords 
        }
      }
    }
  }
  const x = {
    handle: '@listingslab',
    site: '@listingslab',
    cardType: 'summary_large_image',
  }

  return <>
          <GatsbySeo
            title={seo.title}
            description={seo.description}
            canonical={seo.url}
            metaTags={[
              {
                property: "og:image",
                content: seo.image
              },
            ]}
            twitter={x}
            openGraph={{
              url: seo.url,
              title: seo.title,
              site_name: siteName,
              description: seo.description,
              images: [
                {
                  url: seo.image,
                  width: 1200,
                  alt: seo.description,
                },
              ]
            }
          }
        />
      </>
}
