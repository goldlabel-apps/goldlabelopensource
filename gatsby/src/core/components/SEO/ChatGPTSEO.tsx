import React from "react"
import { GatsbySeo } from 'gatsby-plugin-next-seo'

export const ChatGPTSEO = () => {
  const seo = {
    siteName: "Listingslab Software",
    title: "Ask Oliver",
    description: "Frag Ollier",
    image: "/png/openai.png",
    url: "https://listingslab.com/ask-oliver",
    twitterUsername: "@listingslab",
    keywords: "chatgpt, ai, openai, oliver",
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
              site_name: seo.siteName,
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
