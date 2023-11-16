import * as React from "react"
import {
  useTheme,
  Box,
  Grid,
  Container,
  AppBar,
  Toolbar,
} from "@mui/material"
import {
  Image,
  useSiteMetadata,
  usePwaSelect,
  selectFrontmatter,
  Title,
  Children,
  Meta,
  Siblings,
  Markdown,
  CatNav,
  ScrollUp,
  ShareMenu,
  FooterMenu,
  selectCore,
} from "../../../core"

export default function ListingDesktop(props: any) {
  const bgCol = useTheme().palette.background.default
  const frontmatter = usePwaSelect(selectFrontmatter)
  const core = usePwaSelect(selectCore)
  const {scroll} = core
  const {appData} = props
  const siteMeta = useSiteMetadata()
  const {
    siteTitle,
    siteDescription,
  } = siteMeta
  let children: any = false
  let doc: any = null
  let title = siteTitle
  let description = siteDescription
  let html: any = null
  let image: any = null
  let icon: any = null
  let paid: any  = true
  let slug: any = false
  let flag: any = null
  if (appData.pageResources.json.data){
    doc = appData.pageResources.json.data.markdownRemark
    html = doc.html
  }
  if (frontmatter){
    paid = frontmatter.paid
    slug = frontmatter.slug
    title = frontmatter.title
    description = frontmatter.description
    image = frontmatter.image
    icon = frontmatter.icon
    flag = frontmatter.flag
  }
  if (!paid) children = true

  return <>
    <Container maxWidth="md" sx={{mb: "100px"}}>
      <div id="topAnchor" />
      <Grid container spacing={1}>
      
        <Grid item xs={12}>
          <Title 
            title={title}
            description={description}
            flag={flag}
            icon={icon}
            frontmatter={frontmatter}
          />
        </Grid>

        {image ? <Grid item xs={12} sm={8}>

              <Box sx={{display: "flex"}}>
                <Box sx={{mr:0.5}}>
                  <ShareMenu />
                </Box>
                <Box sx={{mr:0.5}}>
                  <Meta frontmatter={frontmatter}/>
                </Box>
                <Box sx={{m:0.5}}>
                  <CatNav />
                </Box>
                <Box sx={{flexGrow:1}}/>
                
              </Box>
              
              <Box sx={{mt:2}}>
                <Image 
                  alt={`${title}. ${description}`}
                  src={image}
                  height={250}
                />
              </Box>

              {html ? <Markdown html={html}/> : null }

              {children ? <Box sx={{mt:1}}><Children
                icons= {true} 
                descriptions={false}
                frontmatter={frontmatter}
              /></Box> : null }
              
          </Grid> : null }

          <Grid item xs={12} sm={4}>
            <Box sx={{mt:6}}>
              <Siblings 
                frontmatter={frontmatter}
                icons= {true}  
              />
            </Box>
          </Grid>
          
      </Grid>

          <AppBar 
            position="fixed" 
            color="inherit" 
            sx={{ 
              background: bgCol,
              boxShadow:0,
              border: 0,
              top: 'auto', 
              bottom: 0, 
            }}>
              <Toolbar>
                <Container maxWidth="md">               
                  <Box sx={{display: "flex"}}>
                    <Box sx={{flexGrow: 1}} />
                    {scroll ? <Box>
                      <ScrollUp />
                    </Box> : null }
                    <Box sx={{mr:4}}>
                      <FooterMenu />
                    </Box>
                  </Box>
                </Container> 
              </Toolbar>
            </AppBar>

      <div id="bottomAnchor" />
    </Container>
  </>
}

