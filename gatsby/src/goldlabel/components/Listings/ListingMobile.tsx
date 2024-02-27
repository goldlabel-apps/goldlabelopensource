import * as React from "react"
import {glConfig} from "../../../config"
import {
  Box,
  Container,
  Tooltip,
  Badge,
  IconButton,
} from "@mui/material"
import {
  Image,
  setCoreKey,
  Icon,
  Tings,
  Font,
  useSiteMetadata,
  Markdown,
  Meta,
  CatNav,
  ShareMenu,
  BottomBar,
  Debugger,
  Pricing,
  Footer,
  usePwaSelect,
  selectDisplay,
  HomeHero,
  usePwaDispatch,
} from "../../../goldlabel"

export default function ListingMobile(props: any) {
  const dispatch = usePwaDispatch()
  const {appData, type} = props
  const siteMeta = useSiteMetadata()  
  const d = usePwaSelect(selectDisplay)
  
  let layout: string = "normal"
  let isHome = false
  if (appData.path === "/")isHome = true
  let title = siteMeta.siteTitle
  let description = siteMeta.siteDescription
  let doc: any = null
  let frontmatter: any = null
  let html: any = null 
  let excerpt: any = null 
  let image: any = null
  let lat: any = null
  let lng: any = null
  let icon: any = null
  let slug: any = null
  if (appData.pageResources.json.data){
    doc = appData.pageResources.json.data.markdownRemark
    frontmatter = doc.frontmatter
    title = frontmatter.title
    description = frontmatter.description
    icon = frontmatter.icon
    lat = frontmatter.lat
    lng = frontmatter.lng
    image = frontmatter.image
    html = doc.html
    excerpt = doc.excerpt
    slug = frontmatter.slug
    if (frontmatter.layout) layout = frontmatter.layout
  }
  const {sharing} = glConfig
  
  let minMdH = 0
  const el = document.getElementById('markdown')
  if (el && d){
    const {h} = d
    const rect = el.getBoundingClientRect()
    const sT = document.documentElement.scrollTop
    const eT = rect.top + sT;
    minMdH = h - eT - 40
  }

  if (type === "goldlabel") return <>
    <Pricing />
    <BottomBar />
  </>

  return <>
          <div id="topAnchor" />

          <Box sx={{display: "flex", m:1}}>
               
                <Box sx={{}}>
                  <CatNav />
                </Box>
                <Box sx={{mr:0.5}}>
                  <Meta frontmatter={frontmatter}/>
                </Box>

                <Box sx={{}}>
                  <Tooltip title={<Font color="white">
                    Menu
                  </Font>}>
                    <Badge badgeContent={0}>
                      <IconButton 
                        color="inherit"
                        aria-label="Open Menu"
                        onClick={(e: React.MouseEvent) => {
                          e.preventDefault()
                          dispatch(setCoreKey("navDialogOpen", true))
                        }}>
                        <Icon icon={"menu"} color="primary" />
                      </IconButton>
                    </Badge>
                  </Tooltip>
                </Box>

                {sharing ? <Box sx={{}}>
                    <ShareMenu />
                  </Box> : null}

                  <Box sx={{}}>
                    <Tings mode="on"/>
                  </Box> 

                <Box sx={{flexGrow:1}}/>
              </Box>
          
          <Container>  
            
            <Box sx={{}}>
              <Debugger />
              <Box sx={{display: "flex", mt:0}}>     
                <Box sx={{}}>
                  <Font variant="title"  color="primary">
                      {title}
                  </Font>
                  <Font>
                    {description}
                  </Font>
                </Box>
                <Box sx={{flexGrow:1}}/>
              </Box>
              
              <Box sx={{mt:2, mb:2}}>
                <Image 
                  alt={`${title}. ${description}`}
                  src={image}
                  height={175}
                />
              </Box>
              <Box 
              id="markdown"
              sx={{
                mt:2,
                minHeight: minMdH,
              }}>
                <Markdown html={html} />
              </Box>

              {layout === "home" ? <Box 
              id="home"
              sx={{mt:2}}>
                <HomeHero />
              </Box> : null }
              
              <Box sx={{mt:3}}>
                <Footer />
              </Box>
            <Box sx={{height: 70}} />
            <div id="bottomAnchor" />
          </Box>
          {/* <BottomBar /> */}
        </Container>
      </>
}
