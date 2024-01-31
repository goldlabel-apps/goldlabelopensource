import * as React from "react"
import {glConfig} from "../../../config"
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Container,
} from "@mui/material"
import {
  Image,
  Tings,
  Goldlabel,
  Icon,
  Font,
  useSiteMetadata,
  Navigator,
  Markdown,
  Meta,
  CatNav,
  ShareMenu,
  BottomBar,
  Debugger,
  Pricing,
  Footer,
} from "../../../goldlabel"

export default function ListingMobile(props: any) {
  const {appData, type} = props
  const siteMeta = useSiteMetadata()  
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
  }
  const {sharing} = glConfig
  // console.log("type", type)
  if (type === "goldlabel") return <>
    <Pricing />
    <BottomBar />
  </>

  return <>
          <div id="topAnchor" />

          <Box sx={{display: "flex", m:1}}>
                <Box sx={{mt:-0.5, mr:1}}>
                  <Goldlabel />
                </Box> 
                <Box sx={{}}>
                  <CatNav />
                </Box>
                <Box sx={{mr:0.5, mt: -0.5}}>
                  <Meta frontmatter={frontmatter}/>
                </Box>
                {sharing ? <Box sx={{mt: -0.5}}>
                    <ShareMenu />
                  </Box> : null}

                  <Box sx={{}}>
                    <Tings mode="on"/>
                  </Box> 

                  

                <Box sx={{flexGrow:1}}/>
              </Box>


          {/* <Accordion sx={{boxShadow:0}} defaultExpanded={slug === "/" ? true : false }>
            <AccordionSummary>
              <Box sx={{flexGrow:1}}/>
              <Icon icon="menu" />
            </AccordionSummary>
            <AccordionDetails>
              <Navigator />
            </AccordionDetails>
          </Accordion> */}
          
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
              
              <Box sx={{mt:2}}>
                <Image 
                  alt={`${title}. ${description}`}
                  src={image}
                  height={175}
                />
              </Box>
              <Markdown html={html} />
              <Footer />
            <Box sx={{height: 70}} />
            <div id="bottomAnchor" />
          </Box>
          <BottomBar />
        </Container>
      </>
}
