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
  Font,
  CatNav,
  ScrollUp,
  DarkmodeToggle,
  ShareMenu,
} from "../../../core"
import {You} from "../../../plugins/Pingpong"

export default function ListingDesktop(props: any) {
  const bgCol = useTheme().palette.background.default
  const frontmatter = usePwaSelect(selectFrontmatter)
  const {appData} = props
  const siteMeta = useSiteMetadata()
  const {
    version,
    siteTitle,
    siteDescription,
  } = siteMeta
  let children: any = false
  let doc: any = null
  let title = siteTitle
  let description = siteDescription
  let html: any = null 
  let parentSlug: any = null 
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
    parentSlug = frontmatter.parentSlug
    title = frontmatter.title
    description = frontmatter.description
    image = frontmatter.image
    icon = frontmatter.icon
    flag = frontmatter.flag
  }
  if (!paid){
    children = true
  }

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

        <Grid item xs={12} sm={4}>
          <Siblings 
            frontmatter={frontmatter}
            icons= {true}  
          />
        </Grid>

        {image ? <Grid item xs={12} sm={8}>
              <Box sx={{display: "flex"}}>
                <Box sx={{mt:0}}>
                  <CatNav />
                </Box>
                <Box sx={{flexGrow:1}}/>
                <Box sx={{mt:0}}>
                  <Meta frontmatter={frontmatter}/>
                </Box>
              </Box>
              
              <Box sx={{mt:2}}>
                <Image 
                  alt={`${title}. ${description}`}
                  src={image}
                  height={250}
                />
              </Box>

              {children ? <Box sx={{mt:2}}><Children
                icons= {true} 
                descriptions={false}
                frontmatter={frontmatter}
              /></Box> : null }
              
              {html ? <Markdown html={html}/> : null }
          </Grid> : null }
          
          
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
                    <Box sx={{m:1.5}}>
                        <Font variant="small" color="muted">
                          {version}
                        </Font>
                    </Box>
                    <Box>
                    
                      <You />
                      <DarkmodeToggle />
                      <ShareMenu />
                    </Box>
                    <Box sx={{flexGrow: 1}} />
                    <Box>
                      <ScrollUp />
                    </Box>
                  </Box>
                </Container> 
              </Toolbar>
            </AppBar>

      <div id="bottomAnchor" />
    </Container>
  </>
}
