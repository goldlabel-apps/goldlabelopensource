import React from "react"
import { GatsbySeo } from 'gatsby-plugin-next-seo'

export const GoldlabelSEO = () => {
  const seo = {
    title: `Goldlabel`,
    description: "A modern alternative to WordPress",
    image: "/png/features/goldlabel.png",
    url: "https://listingslab.com/goldlabel/",
    keywords: "wordpress, gatsby, react",
  }
  const x = {
    handle: '@listingslab',
    site: '@listingslab',
    cardType: 'summary_large_image',
  }
  return <>
          <GatsbySeo
            title={`${seo.title}. ${seo.description}`}
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
