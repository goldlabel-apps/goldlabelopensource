import * as React from 'react'
import {glConfig} from "../../../config"
import {
  AppBar,
  Box,
  Toolbar,
  Container,
} from "@mui/material"
import {
  Image,
  Font,
  TitleMobile,
  useSiteMetadata,
  Children,
  Categories,
  Markdown,
  Siblings,
  usePwaSelect,
  selectCore,
  Meta,
  CatNav,
  ScrollButton,
} from "../../../core"

export default function ListingMobile(props: any) {  
  const {appData} = props
  const core = usePwaSelect(selectCore)
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
            <div id="topAnchor" />
            <Box sx={{  }}>

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

              {html ? <Box sx={{}}>
                <Markdown html={html}/>
              </Box> : null }
              
              {!isHome ? <Siblings 
                      frontmatter={frontmatter}
                      icons= {false}  
                    /> : <>
                <Categories />
              </> }

            <Box sx={{m:1.5, display: "flex"}}>
              <Box sx={{flexGrow:1}} />
              <Box>
                
                  <Font variant="small" color="muted">
                    {version}
                  </Font>
              </Box>
            </Box>
            <Box sx={{height: 70}} />
            <div id="bottomAnchor" />
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
                <Box sx={{ flexGrow: 1 }} />
                <Box>
                  <ScrollButton />
                </Box>
              </Toolbar>
            </AppBar>
            
        </Container>
      </>
}
