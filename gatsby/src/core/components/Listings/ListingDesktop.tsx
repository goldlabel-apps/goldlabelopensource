import * as React from "react"
import {glConfig} from "../../../config"
import {
  useTheme,
  Box,
  Grid,
  Container,
  CardHeader,
} from "@mui/material"
import {
  Image,
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
  useAllMarkdown,
  useChildren,
  Debugger,
  Pingpong,
} from "../../../core"
// import {AskOliver} from "../../../plugins/AskOliver"

export default function ListingDesktop(props: any) {
  const dispatch = usePwaDispatch()
  const theme = useTheme()
  const lightDark = theme.palette.mode
  const frontmatter = usePwaSelect(selectFrontmatter)
  const {appData} = props
  const siteMeta = useSiteMetadata()
  const allMarkdown = useAllMarkdown()
  let thisSlug = "/"
  if (frontmatter) thisSlug = frontmatter.slug
  const childrenArr = useChildren(thisSlug, allMarkdown)
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
  let flag: any = null
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
    flag = frontmatter.flag
  }
  const {sharing} = glConfig

  return <>
    <Container maxWidth="md" sx={{mb: "100px"}}>
      <div id="topAnchor" />
      <Grid container spacing={1}>
      
        <Grid item xs={12}>

          <Box>
            <CardHeader 
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
              <Box sx={{flexGrow:1}}/>
            </Box>
            <Pingpong />
            </>}
              title={<Font variant="title">
                        {title}
                    </Font>}
              subheader={<Font variant="small">
                            {description}
                        </Font>}
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
            <Markdown html={html} /> 
          </Box>
    
          </Grid> : null }

                
      </Grid>
      <BottomBar />
      
      <div id="bottomAnchor" />
    </Container>
  </>
}

/*
<Grid item xs={12} md={7}>
              <AskOliver />
            </Grid>
*/