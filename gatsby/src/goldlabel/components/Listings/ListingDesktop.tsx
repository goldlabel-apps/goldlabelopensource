import * as React from "react"
import {glConfig} from "../../../config"
import {
  useTheme,
  Avatar,
  ButtonBase,
  IconButton,
  Box,
  Grid,
  Container,
  CardHeader,
} from "@mui/material"
import {
  Image,
  Goldlabel,
  Tings,
  navigate,
  Pricing,
  Font,
  useSiteMetadata,
  usePwaSelect,
  usePwaDispatch,
  selectFrontmatter,
  Navigator,
  Meta,
  Markdown,
  CatNav,
  ShareMenu,
  BottomBar,
  Debugger,
  Footer,
} from "../../../goldlabel"

export default function ListingDesktop(props: any) {
  const dispatch = usePwaDispatch()
  const frontmatter = usePwaSelect(selectFrontmatter)
  const mode = useTheme().palette.mode
  // console.log("mode", mode)
  const {appData, type} = props
  const siteMeta = useSiteMetadata()
  let thisSlug = "/"
  if (frontmatter) thisSlug = frontmatter.slug
  const {
    siteTitle,
    siteDescription,
  } = siteMeta
  let doc: any = null
  let title = siteTitle
  let description = siteDescription
  let html: any = null
  let image: any = null
  let icon: any = null
  let slug: any = false
  let lat: any = null
  let lng: any = null

  if (appData.pageResources.json.data){
    doc = appData.pageResources.json.data.markdownRemark
    html = doc.html
  }
  if (frontmatter){
    slug = frontmatter.slug
    lat = frontmatter.lat
    lng = frontmatter.lng
    title = frontmatter.title
    description = frontmatter.description
    image = frontmatter.image
    icon = frontmatter.icon
  }
  const {sharing} = glConfig
  // console.log("type", type)
  if (type === "goldlabel") return <>
    <Pricing />
    <BottomBar />
  </>

  return <>
    <Container maxWidth="md" sx={{mb: "100px"}}>
      <div id="topAnchor" />
      <Grid container spacing={1}>
      
        <Grid item xs={12}>

          <Box>
            <CardHeader 

              title={<Font variant="title" color="primary">
                  {title}
              </Font>}
              subheader={<Font variant="small">
                      {description}
                  </Font>}


              avatar={<IconButton
                        sx={{ml:-2}}
                        onClick={() => {
                          dispatch(navigate("/", "_self"))
                        }}>
                        <Avatar 
                          src={mode === "light" ? "/svg/iOS.svg" : "/svg/iOS_w.svg"  }
                          alt={title}
                        />
                      </IconButton>
              }
              action={<>
              <Box sx={{display: "flex", m:1}}>
              <Box sx={{}}>
                <CatNav />
              </Box>

              <Box sx={{mr:0.5, mt: -0.5}}>
                <Meta frontmatter={frontmatter}/>
              </Box>
              
              {sharing ? <Box sx={{mt: -0.5}}>
                  <ShareMenu />
                </Box> : null}

                <Box sx={{mt:-0.5}}>
                  <Tings mode="on"/>
                </Box> 

                <Box sx={{mt:-0.5}}>
                  <Goldlabel />
                </Box> 

              <Box sx={{flexGrow:1}}/>
            </Box>
            </>}
            />
          </Box>

        </Grid>

        <Grid item xs={12} sm={4}>
            <Navigator />
        </Grid>

        {image ? <Grid item xs={12} sm={8}>
          <Debugger />
          <Box sx={{mb:2}}>
            <Image 
              alt={`${title}. ${description}`}
              src={image}
              height={225}
            />
            {type === "goldlabel" ? null : null }
            <Markdown html={html} />
           
          </Box>
          </Grid> : null }
      </Grid>
      <Footer />
      <BottomBar />
      <div id="bottomAnchor" />
    </Container>
  </>
}

/*
*/