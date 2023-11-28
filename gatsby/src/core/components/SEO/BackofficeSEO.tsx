import React from "react"
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import { useSiteMetadata } from "../../../core"

export const BackofficeSEO = () => {
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
    title: `Backoffice`,
    description: siteDescription,
    image: siteImage,
    url: siteUrl,
    twitterUsername,
    keywords: siteKeywords,
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
