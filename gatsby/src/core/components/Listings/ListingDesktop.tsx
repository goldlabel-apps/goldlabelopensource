import * as React from "react"
import {
  Box,
  Grid,
  Container,
  CardHeader,
  IconButton,
  Avatar,
} from "@mui/material"
import {
  Image,
  Font,
  navigate,
  useSiteMetadata,
  usePwaSelect,
  usePwaDispatch,
  selectFrontmatter,
  Children,
  Categories,
  Meta,
  Markdown,
  CatNav,
  ShareMenu,
  BottomBar,
  useAllMarkdown,
  useChildren,
} from "../../../core"

export default function ListingDesktop(props: any) {
  const dispatch = usePwaDispatch()
  const frontmatter = usePwaSelect(selectFrontmatter)
  const {appData} = props
  const siteMeta = useSiteMetadata()
  const allMarkdown = useAllMarkdown()
  let thisSlug = "/"
  if (frontmatter) thisSlug = frontmatter.slug
  const childrenArr = useChildren(thisSlug, allMarkdown)
  // console.log("childrenArr", childrenArr)
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
        
          <Box sx={{my: 1}}>
            <CardHeader 
              avatar={<IconButton 
                          sx={{ml:-3}}
                          onClick={(e: React.MouseEvent) => {
                              e.preventDefault()
                              dispatch(navigate("/", "_self"))
                          }}>
                          <Avatar src="/svg/iOS.svg" alt={`${title} ${description}`} />
                      </IconButton>}
              title={<Font variant="title">
                  {title}
              </Font>}
              subheader={<Font variant="small">
                  {description}
              </Font>}
            />
          </Box>
        </Grid>

        {image ? <Grid item xs={12} sm={8}>

              <Box sx={{display: "flex"}}>
                <Box sx={{m:0.5}}>
                  <CatNav />
                </Box>
                <Box sx={{mr:0.5}}>
                  <Meta frontmatter={frontmatter}/>
                </Box>
                
                <Box sx={{mr:0.5}}>
                  <ShareMenu />
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

              
              
          </Grid> : null }

          <Grid item xs={12} sm={4}>

            {childrenArr.length ? <Box sx={{mt:1}}><Children
                icons= {true} 
                descriptions={false}
                frontmatter={frontmatter}
              /></Box> : <Categories /> }

            
          </Grid>
          
      </Grid>
      <BottomBar />
      <div id="bottomAnchor" />
    </Container>
  </>
}

