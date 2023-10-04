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
  usePwaDispatch,
  Font,
  selectCategories,
} from "../../goldlabel"
import {
  MainMenu,
  Markdown,
  MetaButtons,
  SiblingList,
  MoreLikeThis,
} from "../Listings"
import {
  MiniMap,
} from "../Geolocator"
import {
  toggleWeather,
  useCurrentWeather,
  WeatherCTA,
} from "../Weather"
import { TryOutlined } from '@mui/icons-material'

export default function Listings (props: any) {
  const dispatch = usePwaDispatch()
  const currentWeather = useCurrentWeather()
  const categories = usePwaSelect(selectCategories)
  const {frontmatter, html} = props
  const {
    cover,
    website,
    facebook,
    email,
    phone,
    title,
    slug,
    lat,
    lng,
  } = frontmatter
  let showMoreLikeThis: boolean = false
  let noMeta: boolean = false
  let noMap: boolean = true
  if (!website && !facebook && !email && !phone) noMeta = true
  if (lat && lng) noMap = false
  let showCTA = false
  if (slug === "/") showCTA = true
  const {
    currentWeatherStr,
    icon,
  } = currentWeather
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
                
                {/* <Box sx={{mb:2}}>
                  
                </Box> */}

{showCTA ? <Box sx={{mb:2}}>
<WeatherCTA />
</Box> : null }
                
                <Grid container spacing={1}>
                
                {!noMap ? <Grid item xs={12} md={6}>
                          <Image 
                            options={{
                              src: frontmatter.image,
                              height: 213,
                              alt: frontmatter.description,
                            }}
                          /></Grid> : null}

                  <Grid item xs={12} md={6}>
                    <Box sx={{mx:0}}>
                        {noMap ? <Image 
                          options={{
                            src: frontmatter.image,
                            height: 213,
                            alt: frontmatter.description,
                          }}
                        /> : <MiniMap frontmatter={frontmatter}/> }
                        
                    </Box> 
                  </Grid>

                  

                  <Grid item xs={12} md={6}>
                    {cover ? <SiblingList /> : null }
                  </Grid>

                  {!noMeta ? <Grid item xs={12}>
                    <Box sx={{mt:3}}>
                      <MetaButtons frontmatter={frontmatter}/>
                    </Box>
                  </Grid> : null }

                  {showMoreLikeThis ? <Grid item xs={12}>
                      <MoreLikeThis frontmatter={frontmatter}/>
                  </Grid> : null}
                  
                  <Grid item xs={12}>
                    <Markdown html={html} />
                  </Grid>

                </Grid>                
              </Grid>
            </Grid>
          </Container>
        </>
}
