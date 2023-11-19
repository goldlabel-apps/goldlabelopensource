import * as React from "react"
import {
  useTheme,
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
  usePwaSelect,
  selectCore,
  Children,
  Categories,
  Markdown,
  Siblings,
  Meta,
  CatNav,
  ScrollUp,
  SystemMenu,
  ShareMenu,
  BottomBar,
} from "../../../core"

export default function ListingMobile(props: any) {  
  const {appData} = props
  const bgCol = useTheme().palette.background.default
  const siteMeta = useSiteMetadata()
  const core = usePwaSelect(selectCore)
  const {scroll} = core
  
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

  if (appData.pageResources.json.data){
    doc = appData.pageResources.json.data.markdownRemark
    frontmatter = doc.frontmatter
    title = frontmatter.title
    description = frontmatter.description
    image = frontmatter.image
    html = doc.html
    excerpt = doc.excerpt
    paid = frontmatter.paid
  }
  if (!paid) children = true
  
  return <>
          <div id="topAnchor" />
          <Container>  
            <Box sx={{}}>
              
              <TitleMobile
                title={title}
                description={description}
              />

              <Box sx={{display: "flex", mb:2}}>
                  <Box sx={{}}>
                    <ShareMenu />
                  </Box>
                  <Box sx={{}}>
                    <Meta frontmatter={frontmatter}/>
                  </Box>
                  <Box sx={{mt:0.5, ml:1}}>
                    <CatNav />
                  </Box>
              </Box>


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
                  <Font variant="title">
                    {description}
                  </Font>
                </Box>
                <Box sx={{flexGrow:1}}/>
                  
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
              
              <Categories />
              
              {/* {!isHome ? <Siblings 
                      frontmatter={frontmatter}
                      icons= {false}  
                    /> : <>
                <Categories />
              </> } */}

           
            <Box sx={{height: 70}} />
            <div id="bottomAnchor" />
          </Box>

          <BottomBar />

         
        </Container>
      </>
}
