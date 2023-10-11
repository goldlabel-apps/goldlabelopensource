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
    hideImage,
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
                
                <Box sx={{mb:1, mx:0.25}}>
                  <Title frontmatter={frontmatter}/>
                  {title !== "Home" ? 
                    <Font>{frontmatter.description}</Font>
                  : null }
                </Box>

                {!noMeta ? <Grid item xs={12}>
                    <Box sx={{my:1}}>
                      <MetaButtons frontmatter={frontmatter}/>
                    </Box>
                  </Grid> : null }
                
                <Grid container spacing={1}>

                  {!hideImage ? <Grid item xs={12} md={6}>
                    <Box sx={{mx:0}}>
                      <Image 
                        options={{
                          src: frontmatter.image,
                          height: 213,
                          alt: frontmatter.description,
                        }}
                      />
                    </Box>    
                  </Grid> : null }
                  
                  
                  

                  <Grid item xs={12} md={6}>
                    <Box sx={{mt:2}}>
                      {cover ? <SiblingList /> : null }
                      {!paid ? <SameParent /> : null }
                    </Box>
                  </Grid>

                  

                  { geolocator ? <>
                    {noMap ? null : <Grid item xs={12}  md={6}>
                      <MiniMap frontmatter={frontmatter}/>
                    </Grid>}
                  </> : null }


                  {youtube ? <Grid item xs={12} md={6}>
                    <Box sx={{mx:0}}>
                    <YouTubePlayer url={youtube}/>
                  </Box></Grid> : null}
                  
                  <Grid item xs={12}>
                    <Markdown html={html} />
                  </Grid>

                  {showMoreLikeThis ? <Grid item xs={12} md={6}>
                      <MoreLikeThis frontmatter={frontmatter}/>
                  </Grid> : null}

                </Grid>                
              </Grid>
            </Grid>
          </Container>
        </>
}
