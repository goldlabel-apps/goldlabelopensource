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
  Categories,
  Siblings,
  Markdown,
  Font,
  CatNav,
} from "../../../core"

export default function ListingDesktop(props: any) {
  const frontmatter = usePwaSelect(selectFrontmatter)
  const {appData} = props
  const siteMeta = useSiteMetadata()
  let isHome = false
  if (appData.path === "/") isHome = true
  let children: any = false
  let doc: any = null
  let title = siteMeta.siteTitle
  let description = siteMeta.siteDescription
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

          {children ? <Children
            icons= {true} 
            descriptions={false}
            frontmatter={frontmatter}
          /> : null }

          {isHome ? <Categories /> : null }
          { children && !isHome ? <>
            <Siblings icons={true}/>
          </> : null }
        </Grid>

        {image ? <Grid item xs={12} sm={8}>
          {description ? <Box>
              <Font variant="giant">
                {description}
              </Font>
            </Box> : null }

              <Box sx={{display: "flex"}}>
                <Box sx={{mt:2}}>
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
                {html ? <Markdown html={html}/> : null }
            </Box>
            
          </Grid> : null }
      </Grid>

    </Container>
  </>
}
