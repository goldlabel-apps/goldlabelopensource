import React from "react"
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import { useSiteMetadata } from "../goldlabel"

export const SEOBackoffice = () => {
  const siteMetadata = useSiteMetadata()
  const { 
    siteUrl, 
    siteKeywords,
    siteImage,
    siteTitle,
  } = siteMetadata
  const seo = {
    title: "Backoffice",
    description: siteTitle,
    image: siteImage,
    url: siteUrl,
    twitterUsername: "@listingslab",
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
              site_name: seo.title,
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
