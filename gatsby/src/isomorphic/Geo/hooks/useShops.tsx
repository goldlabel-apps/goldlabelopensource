import { graphql, useStaticQuery } from "gatsby"

export const useShops = () => {
  const data = useStaticQuery(graphql`
  query {
      allMarkdownRemark {
          edges {
              node {
                  frontmatter {
                      title
                      description
                      slug
                      keywords
                      image
                      icon
                      order
                      lat
                      lng
                  }
                  excerpt
                  html
                  wordCount {
                      words
                      sentences
                      paragraphs
                  }
                  timeToRead
              }
          }
      }
     }
`)

    const {allMarkdownRemark} = data   
    const {edges} = allMarkdownRemark
    const docs: Array<any> = []
    for(let i = 0; i < edges.length; i++){        
        const {node} = edges[i]
        const {frontmatter} = node

        if(frontmatter.book === "Dive Shops"){
          docs.push({
            order: frontmatter.order,
            ...node,
          })
        }
    }
    const sortedArr = [...docs].sort((a, b) => a.order - b.order);
    return sortedArr
}