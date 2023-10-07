import * as React from "react"
import { graphql } from "gatsby"
import {
  Box,
  Alert,
  AlertTitle,
  IconButton,
  Container,
  Grid,
} from "@mui/material"
import {
  Icon,
  Font,
  SEO,
  AppShell,
} from "../goldlabel"
import {Listings} from "../mods/Listings"
import {Weather} from "../mods/Weather"

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
                    }}
                  >
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
      <AppShell appData={{...data}} type="markdown">
        
        <Container maxWidth={"lg"}>
          <Grid container spacing={1}>
            <Grid item xs={12}>   
              <Listings 
                frontmatter={{...data.data.markdownRemark.frontmatter}} 
                html={markdownRemark.html}
                excerpt={markdownRemark.excerpt}
              />
            </Grid>
          </Grid>
        </Container>
      </AppShell>
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
      }
    }
  }
`
