import {goldlabelConfig} from "../../goldlabelConfig"
import * as React from 'react'
import {
  Container,
  Grid,
  Box,
} from "@mui/material"
import {
  Image,
  Title,
  usePwaSelect,
  Font,
  selectCategories,
  YouTubePlayer,
} from "../../goldlabel"
import {
  MainMenu,
  Markdown,
  MetaButtons,
  SiblingList,
  SameParent,
  MoreLikeThis,
} from "../Listings"
import {
  MiniMap,
} from "../Geolocator"

export default function Listings (props: any) {
  const categories = usePwaSelect(selectCategories)
  const {frontmatter, html} = props
  const {geolocator} = goldlabelConfig.features
  const {
    cover,
    website,
    facebook,
    email,
    phone,
    youtube,
    title,
    paid,
    lat,
    lng,
  } = frontmatter
  let showMoreLikeThis: boolean = false
  let noMeta: boolean = false
  let noMap: boolean = true
  if (!website && !facebook && !email && !phone) noMeta = true
  if (lat && lng) noMap = false

  return <>
          <Container maxWidth="md">
            <Grid id="listings" container spacing={1}>
              {categories ? <Grid item xs={12} md={3}>
                <MainMenu />
              </Grid> : null }
              
              <Grid item xs={12} md={categories ? 9 : 12}>
                <Box sx={{mb:2, mx:0.25}}>
                  <Title frontmatter={frontmatter}/>
                  {title !== "Home" ? 
                    <Font>{frontmatter.description}</Font>
                  : null }
                </Box>
                <Grid container spacing={1}>
                  <Grid item xs={12} md={!youtube && !paid ? 12 : 6}>
                    <Box sx={{mx:0}}>
                      <Image 
                        options={{
                          src: frontmatter.image,
                          height: 213,
                          alt: frontmatter.description,
                        }}
                      />
                    </Box>    
                  </Grid>
                  {youtube ? <Grid item xs={12} md={6}><Box sx={{mx:0}}>
                    <YouTubePlayer url={youtube}/>
                  </Box></Grid> : null}

                  <Grid item xs={12} md={ !paid ? 12 : 6}>
                    <Box sx={{mt:2}}>
                      {cover ? <SiblingList /> : null }
                      {!paid ? <SameParent /> : null }
                    </Box>
                  </Grid>

                  {!noMeta ? <Grid item xs={12}>
                    <Box sx={{mt:3}}>
                      <MetaButtons frontmatter={frontmatter}/>
                    </Box>
                  </Grid> : null }
                  
                  <Grid item xs={12}>
                    <Markdown html={html} />
                  </Grid>

                  {/* { geolocator ? <>
                    {noMap ? null : <Grid item xs={12}>
                      <MiniMap frontmatter={frontmatter}/>
                    </Grid>}
                  </> : null } */}
                  

                  {showMoreLikeThis ? <Grid item xs={12}>
                      <MoreLikeThis frontmatter={frontmatter}/>
                  </Grid> : null}

                </Grid>                
              </Grid>
            </Grid>
          </Container>
        </>
}
