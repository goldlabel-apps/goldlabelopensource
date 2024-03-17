import React from "react"
import { GatsbySeo } from 'gatsby-plugin-next-seo'

export const KeywordSEO = () => {
  const seo = {
    title: `Keyword`,
    description: "Open Source on Github",
    image: "/webp/goldlabel/era.webp",
    url: "https://free.goldlabel.pro",
    keywords: "goldlabel, github, free",
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
