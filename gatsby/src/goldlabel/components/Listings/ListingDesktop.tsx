import * as React from "react"
import {glConfig} from "../../../config"
import {
  IconButton,
  Box,
  Grid,
  Container,
  CardHeader,
} from "@mui/material"
import {
  Icon,
  Image,
  Goldlabel,
  HomeHero,
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
  selectDisplay,
} from "../../../goldlabel"

export default function ListingDesktop(props: any) {
  const dispatch = usePwaDispatch()
  const frontmatter = usePwaSelect(selectFrontmatter)
  const d = usePwaSelect(selectDisplay)
  const {appData, type} = props
  const siteMeta = useSiteMetadata()
  const {
    siteTitle,
    siteDescription,
  } = siteMeta
  let layout: string = "normal"
  let doc: any = null
  let title = siteTitle
  let description = siteDescription
  let html: any = null
  let image: any = null
  let icon: any = null
  let slug: any = false
  let minMdH = 0
  const el = document.getElementById('markdown')
  if (el && d){
    const {h} = d
    const rect = el.getBoundingClientRect()
    const sT = document.documentElement.scrollTop
    const eT = rect.top + sT;
    minMdH = h - eT - 40
  }
  if (appData.pageResources.json.data){
    doc = appData.pageResources.json.data.markdownRemark
    html = doc.html
  }
  if (frontmatter){
    slug = frontmatter.slug
    title = frontmatter.title
    description = frontmatter.description
    image = frontmatter.image
    icon = frontmatter.icon
    if (frontmatter.layout) layout = frontmatter.layout
  }
  const {sharing} = glConfig

  if (type === "goldlabel") return <>
    <Pricing />
    <BottomBar />
  </>

  return <>
    <Container maxWidth="md" sx={{
      mb: "100px",
      
    }}>
      <div id="topAnchor" />
      <Grid container spacing={1}>
      
        <Grid item xs={12}>
          <Box sx={{}}>
            <CardHeader 
              title={<Font variant="title" color="primary">
                  {title}
              </Font>}
              subheader={<Font variant="small">
                            {description}
                        </Font>}
              avatar={<IconButton
                        sx={{
                          ml:-1.5,
                        }}
                        onClick={() => {
                          dispatch(navigate("/", "_self"))
                        }}>
                        <Icon icon={"blokey"} />
                      </IconButton>
              }
              action={<>
              <Box sx={{
                display: "flex", 
                m:1,
              }}>
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
          <Box sx={{my:2}}>
            <Image 
              alt={`${title}. ${description}`}
              src={image}
              height={300}
            />
            {layout === "home" ? <Box 
              id="home"
              sx={{mt:2}}>
                <HomeHero />
              </Box> : null }
            <Box 
              id="markdown"
              sx={{
                mt:2,
                // border: "1px solid green",
                minHeight: minMdH,
              }}>
              <Markdown html={html} />
            </Box>
          </Box>
          </Grid> : null }
      </Grid>
      <Box sx={{mt:3}}>
        <Footer />
      </Box>
      
      <BottomBar />
      <div id="bottomAnchor" />
    </Container>
  </>
}
