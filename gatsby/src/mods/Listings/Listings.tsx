import * as React from 'react'
import {
  useTheme,
  useMediaQuery,
  Container,
  Grid,
  Box,
} from "@mui/material"
import {
  Image,
  Title,
  usePwaSelect,
  selectPWA,
  Font,
  useAllMarkdown,
  useChildPages,
} from "../../goldlabel"
import {
  MainMenu,
  Markdown,
  ListingLinks,
  SiblingList,
  ChildList,
} from "./"

export default function Listings (props: any) {
  const pwa = usePwaSelect(selectPWA)
  const theme = useTheme()
  const isBig = useMediaQuery(theme.breakpoints.up("md"))
  const {categories} = pwa
  const {frontmatter, html} = props
  const {
    cover,
    website,
    facebook,
    email,
    phone,
    title,
    parentSlug,
  } = frontmatter
  const allMarkdown = useAllMarkdown()
  const allChildren = useChildPages(parentSlug, allMarkdown)  
  let hasChildren = false
  if (allChildren.length) hasChildren = true
  let noMeta = false
  if (!website && !facebook && !email && !phone) noMeta = true

  return <>
          <Container maxWidth="md">
            <Grid id="listings" container spacing={1}>
              {categories ? <Grid item xs={12} md={3}>
                <MainMenu />
              </Grid> : null }
              <Grid item xs={12} md={categories ? 9 : 12}>
                <Title frontmatter={frontmatter}/>
                {title !== "Home" ? <Box sx={{mx:2, mb:2}}>
                  <Font>{frontmatter.description}</Font>
                </Box> : null }
                <Grid container spacing={1}>
                  <Grid item xs={12} md={6}>
                    <Box sx={{mx:0.5}}>
                        <Image options={{
                          src: frontmatter.image,
                          height: isBig ? 270 : 135,
                          alt: frontmatter.description,
                        }}
                      />
                    </Box> 
                  </Grid>
                  <Grid item xs={12} md={6}>
                    {hasChildren ? <ChildList frontmatter={frontmatter}/> : null}
                    {cover ? <SiblingList /> : <ListingLinks frontmatter={frontmatter}/>}

                    { !hasChildren && !cover ? <>
                      <SiblingList />
                    </> : null }

                    
                  </Grid>
                  <Grid item xs={12}>
                    <Markdown html={html} />
                  </Grid>
                  
                </Grid>                
              </Grid>
            </Grid>
          </Container>
        </>
}
