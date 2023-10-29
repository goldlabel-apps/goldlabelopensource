import * as React from "react"
import {
  Box,
  Grid,
  Container,
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
  ScrollButton,
} from "../../../core"

export default function ListingDesktop(props: any) {
  const frontmatter = usePwaSelect(selectFrontmatter)
  const {appData} = props
  const siteMeta = useSiteMetadata()
  const {
    version,
    siteTitle,
    siteDescription,
  } = siteMeta
  let isHome = false
  if (appData.path === "/") isHome = true
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
    <Container maxWidth="md">
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
          
          {children ? <Children
            icons= {true} 
            descriptions={false}
            frontmatter={frontmatter}
          /> : null }

        </Grid>

        {image ? <Grid item xs={12} sm={8}>
          {description ? <Box>
              <Font variant="title">
                {description}
              </Font>
            </Box> : null }
              <Box sx={{mt:2}}>
                <Image 
                  alt={`${title}. ${description}`}
                  src={image}
                  height={250}
                />
              </Box>
              <Box sx={{display: "flex"}}>
                <Box sx={{mt:2}}>
                  <CatNav />
                </Box>
                <Box sx={{flexGrow:1}}/>
                <Box sx={{mt:1}}>
                  <Meta frontmatter={frontmatter}/>
                </Box>
              </Box>
              {html ? <Markdown html={html}/> : null }
          </Grid> : null }
      </Grid>

      <Grid item xs={12}>
        <Box sx={{m:1.5, display: "flex"}}>
            <Box sx={{flexGrow:1}} />
            <Box sx={{m:1.5}}>
            
                <Font variant="small" color="muted">
                  {version}
                </Font>
            </Box>
            <Box>
              <ScrollButton />
            </Box>
        </Box>
      </Grid>
      
      <div id="bottomAnchor" />
    </Container>
  </>
}
