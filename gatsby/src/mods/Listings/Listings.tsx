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
  Featured,
} from "../../../"
import {
  SubPages,
  MainMenu,
  Markdown,
  ListingMap,
  ListingLinks,
} from "./"

export default function Listings (props: any) {
  const pwa = usePwaSelect(selectPWA)
  const theme = useTheme()
  const isBig = useMediaQuery(theme.breakpoints.up("md"))
  const {categories} = pwa
  const {frontmatter, html, excerpt} = props
  let noMeta = false
  let notCover = true 
  const {
    cover,
    website,
    facebook,
    email,
    lat,
    lng,
    title,
  } = frontmatter
  if (!website && !facebook && !email && !lat && !lng) noMeta = true
  if(cover) notCover = false
  let hasMap = false
  if (lat && lng) hasMap = true

  return <>
          <Container>
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

                  <Grid item xs={12} md={!hasMap ? 12 : 6}>
                    <Box>
                        <Image options={{
                          src: frontmatter.image,
                          height: isBig ? 270 : 135,
                          alt: frontmatter.description,
                        }}
                      />
                    </Box> 
                  </Grid>
                  {hasMap ? <Grid item xs={12} md={6}>
                            <Box sx={{}}>
                              <ListingMap frontmatter={frontmatter}/>
                            </Box>
                  </Grid>: null }
                  {cover ? null: <ListingLinks frontmatter={frontmatter}/>}
                </Grid>
                
                { cover ? <SubPages /> : null }
                <Box sx={{}}>
                  <Markdown html={html} />
                </Box>
                {cover ? null : <SubPages /> }
                <Box sx={{}}>
                  <Featured />    
                </Box>                
              </Grid>
            </Grid>
          </Container>
          
        </>
}

/*
<pre>pages: {JSON.stringify(pages, null, 2)}</pre>
*/