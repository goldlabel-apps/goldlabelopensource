import * as React from "react"
import {glConfig} from "../../../config"
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Container,
  useTheme,
} from "@mui/material"
import {
  Image,
  Icon,
  Font,
  Pingpong,
  useSiteMetadata,
  Children,
  Categories,
  Markdown,
  Meta,
  CatNav,
  ShareMenu,
  BottomBar,
  usePwaDispatch,
  Debugger,
} from "../../../core"
import {AskOliver} from "../../../plugins/AskOliver"

export default function ListingMobile(props: any) {  
  const dispatch = usePwaDispatch()
  const theme = useTheme()
  const lightDark = theme.palette.mode
  const {appData} = props
  const siteMeta = useSiteMetadata()  
  let isHome = false
  if (appData.path === "/")isHome = true
  const {version} = siteMeta
  let title = siteMeta.siteTitle
  let description = siteMeta.siteDescription
  let doc: any = null
  let frontmatter: any = null
  let html: any = null 
  let excerpt: any = null 
  let image: any = null
  let paid: any = true
  let children: any = false
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
    paid = frontmatter.paid
    slug = frontmatter.slug
  }
  if (!paid) children = true
  const {sharing} = glConfig
  
  return <>
          <div id="topAnchor" />
          <Accordion sx={{boxShadow:0}}>
            <AccordionSummary>
              <Box sx={{flexGrow:1}}/>
              <Icon icon="menu" />
            </AccordionSummary>
            <AccordionDetails>
              <Categories />
              {children ? <Box sx={{}}>
                  <Children 
                    icons= {true} 
                    frontmatter={frontmatter}
                  />
                </Box> : null }
            </AccordionDetails>
          </Accordion>
          
          <Container>  
            
            <Box sx={{}}>
              <Debugger />
              <Pingpong />

              <Box sx={{display: "flex", mt:0}}>     
                <Box sx={{}}>
                  <Font variant="title">
                      {title}
                  </Font>
                  <Font>
                    {description}
                  </Font>
                </Box>
                <Box sx={{flexGrow:1}}/>
              </Box>

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
 
              <Box>
                  <Image 
                    alt={`${title}. ${description}`}
                    src={image}
                    height={150}
                  />
                </Box>
              

              <Markdown html={html} />
              
            <Box sx={{height: 70}} />
            <div id="bottomAnchor" />
          </Box>
          <BottomBar />
        </Container>
      </>
}
