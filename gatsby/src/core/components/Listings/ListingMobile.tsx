import * as React from "react"
import {glConfig} from "../../../config"
import {
  Box,
  Container,
  CardHeader,
  IconButton,
  Avatar,
} from "@mui/material"
import {
  Image,
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
  navigate,
  Debugger,
} from "../../../core"
import {
  Flash,
  MovieClip,
} from "../../../plugins/Flash"

export default function ListingMobile(props: any) {  
  const dispatch = usePwaDispatch()
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
  }
  if (!paid) children = true
  const {sharing} = glConfig
  const flash = false

  return <>
          <div id="topAnchor" />
          <Container>  
            <Box sx={{}}>
            
              <CardHeader 
                action={<Pingpong />}
                avatar={<IconButton 
                            color="primary"
                            sx={{ml:-3}}
                            onClick={(e: React.MouseEvent) => {
                                e.preventDefault()
                                dispatch(navigate("/", "_self"))
                            }}>
                            <Avatar src="/svg/iOS.svg" alt={`${title} ${description}`} />
                        </IconButton>}
                
              />
              <Debugger />

              <Box sx={{mb:2}}>
                { flash ? <>
                  <Flash 
                    flashId="test"
                    height={250}
                  >
                    Flash
                  </Flash>
                </> : <>
                  <Image 
                    alt={`${title}. ${description}`}
                    src={image}
                    height={250}
                  />
                </> }
              </Box>

              <Box sx={{display: "flex", my:2}}>                
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

              


              <Box sx={{display: "flex"}}>
                <Box sx={{m:0.5}}>
                  <CatNav />
                </Box>
                <Box sx={{mr:0.5}}>
                  <Meta frontmatter={frontmatter}/>
                </Box>
                {sharing ? <Box sx={{mr:0.5}}>
                    <ShareMenu />
                  </Box> : null}
                <Box sx={{flexGrow:1}}/>
              </Box>

              {html ? <Box sx={{}}>
                <Markdown html={html}/>
              </Box> : null }

              {children ? <Box sx={{}}>
                  <Children 
                    icons= {true} 
                    frontmatter={frontmatter}
                  />
                </Box> : null }
              
              <Categories />
              
            <Box sx={{height: 70}} />
            <div id="bottomAnchor" />
          </Box>

          <BottomBar />

        </Container>
      </>
}
