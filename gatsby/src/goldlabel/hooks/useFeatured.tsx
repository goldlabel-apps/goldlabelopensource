import { graphql, useStaticQuery } from "gatsby"

export const useFeatured = () => {
  const data = useStaticQuery(graphql`
  query AM {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            draft
            order
            cover
            featured
            category
            parentSlug
            slug
            title
            description
            date
            flash
            keywords
            image
            icon
            lat
            lng
            website
            email
            facebook
            phone
          }
          html
          excerpt
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
                if(!frontmatter.draft){
                  if(frontmatter.featured){
                    docs.push({
                      order: frontmatter.order,
                      ...node,
                    })
                  }
                }
    }
    const sortedArr = [...docs].sort((a, b) => a.order - b.order);
    return sortedArr
}