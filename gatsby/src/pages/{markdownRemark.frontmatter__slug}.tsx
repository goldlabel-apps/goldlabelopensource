import * as React from "react"
import { graphql } from "gatsby"
import {
  Alert,
  AlertTitle,
  Box,
  IconButton,
} from "@mui/material"
import {
  PWA,
  Icon,
  Font,
  SEO,
} from "../core"

export default function MarkdownPage(data: any) {
  const { markdownRemark } = data.data
  if(!markdownRemark) return <>
    <Alert
      sx={{m:0}}
      severity="error"
      iconMapping={{
        error: <Box sx={{}}>
                  <IconButton
                    onClick={() => {
                      window.open("/", "_self")
                    }}>
                    <Icon icon={"home"} />
                  </IconButton>
                </Box>
      }}>
        <AlertTitle>
          <Font variant="title">
            Gatsby Error
          </Font>
        </AlertTitle>
        <Font variant="small">
        To clear this error clean and rebuild gatsby. 
        cd to /gatsby and run <pre>npm run clean && npm run start</pre>
        </Font>
    </Alert>
  </>

  return (<>
            <SEO appData={{...data}}/>
            <PWA appData={{...data}} type={"markdown"} />
          </>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      excerpt
      frontmatter {
        paid
        flag
        draft
        order
        cover
        category
        parentSlug
        slug
        title
        description
        keywords
        image
        youtube
        icon
        lat
        lng
        website
        email
        facebook
        phone
        twitter
      }
    }
  }
`
