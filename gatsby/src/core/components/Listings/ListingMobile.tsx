import * as React from 'react'
import {
  IconButton,
  AppBar,
  Box,
  Toolbar,
  Container,
} from "@mui/material"
import {
  Image,
  Icon,
  TitleMobile,
  useSiteMetadata,
  Children,
  Categories,
  Markdown,
  Siblings,
  usePwaDispatch,
  Meta,
  scrollTop,
  CatNav,
} from "../../../core"

export default function ListingMobile(props: any) {
  const {appData} = props
  const dispatch = usePwaDispatch()
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
  let icon: any = null
  let paid: any = true
  let children: any = false
  if (appData.pageResources.json.data){
    doc = appData.pageResources.json.data.markdownRemark
    frontmatter = doc.frontmatter
    title = frontmatter.title
    description = frontmatter.description
    image = frontmatter.image
    html = doc.html
    excerpt = doc.excerpt
    icon = frontmatter.icon
    paid = frontmatter.paid
  }
  if (!paid){
    children = true
  }
  return <>
          <Container maxWidth="md">
          <div id="top" />
          <Box sx={{ pb: '50px' }}>

            <TitleMobile
              title={title}
              description={description}
            />

              {image ? <>
                <Box>
                  <Image 
                    alt={`${title}. ${description}`}
                    src={image}
                    height={200}
                  />
                </Box>
              </> : null }

              <Box sx={{display: "flex"}}>
                <Box sx={{mt:2}}>
                  <CatNav />
                </Box>
                <Box sx={{flexGrow:1}}/>
                <Box sx={{mt:1.5}}>
                  <Meta frontmatter={frontmatter}/>
                </Box>
              </Box>
              
            
            {children ? <Box sx={{}}>
              <Children 
                icons= {true} 
                frontmatter={frontmatter}
              />
            </Box> : null }

            {/* <Siblings frontmatter={frontmatter}/> */}

            {html ? <Box sx={{}}>
              <Markdown html={html}/>
            </Box> : null }
            
            
            {!isHome ? <Siblings 
                    frontmatter={frontmatter}
                    icons= {true}  
                  /> : <>
              <Categories />
            </> }

          </Box>

        <AppBar 
          position="fixed" 
          color="inherit" 
          sx={{ 
            boxShadow:0, 
            border: 0,
            top: 'auto', 
            bottom: 0, 
          }}>
          <Toolbar>
            <Box sx={{flexGrow:1}} />
            <IconButton 
              color="inherit"
              aria-label="Scroll to top"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault()
                dispatch(scrollTop())
              }}>
              <Icon icon="up" color="primary" />
            </IconButton>
            <Box sx={{ flexGrow: 1 }} />
          </Toolbar>
        </AppBar>
        </Container>
      </>
}
