import * as React from "react"
import {glConfig} from "../../../config"
import {
  Box,
  Container,
  IconButton,
  Menu,
} from "@mui/material"
import {
  Image,
  Font,
  useSiteMetadata,
  Markdown,
  Meta,
  CatNav,
  Pricing,
  Footer,
  usePwaSelect,
  selectDisplay,
  Icon,
  Navigator,
} from "../../../goldlabel"
import {Isomorphic} from "../../../isomorphic"
import {
  FlashHero,
} from "../../../isomorphic/Flash"

export default function Mobile(props: any) {

  const flashHero = glConfig.isomorphic.flash.hero
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const openMobileMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const closeMenu = () => setAnchorEl(null)

  // const dispatch = usePwaDispatch()
  const {appData, type} = props
  const siteMeta = useSiteMetadata()  
  const d = usePwaSelect(selectDisplay)
  let layout: string = "normal"
  let isHome = false
  if (appData.path === "/")isHome = true
  let title = siteMeta.siteTitle
  let description = siteMeta.siteDescription
  let doc: any = null
  let frontmatter: any = null
  let html: any = null 
  let image: any = null
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
    slug = frontmatter.slug
    if (frontmatter.layout) layout = frontmatter.layout
  }
  
  let minMdH = 0
  const el = document.getElementById('markdown')
  if (el && d){
    const {h} = d
    const rect = el.getBoundingClientRect()
    const sT = document.documentElement.scrollTop
    const eT = rect.top + sT;
    minMdH = h - eT - 30
  }

  if (type === "goldlabel") return <Pricing />

  return <>
          <div id="topAnchor" />
          <Box sx={{display: "flex", m:1}}>
          <Box sx={{flexGrow:1}}/>
            <Box sx={{ml:1}}>
              <Meta frontmatter={frontmatter}/>
            </Box>
              <Box sx={{mt: 0.25}}>
                <CatNav />
              </Box>
              <Box sx={{}}>
                <Isomorphic />
              </Box>

              <Menu
                id="mobile-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={closeMenu}
                MenuListProps={{
                  'aria-labelledby': 'mobile-button',
                }}>
                  <Navigator />
              </Menu>

              <Box sx={{mr: 1}}>
                <IconButton
                  color="primary"
                  id="mobileMenuBtn"
                  aria-haspopup="true"
                  aria-controls={open ? 'mobileMenuBtn' : undefined}                  
                  aria-expanded={open ? 'true' : undefined}
                  onClick={openMobileMenu}>
                  <Icon icon="menu" /> 
                </IconButton>
              </Box>
          </Box>
          <Container>
            
            <Box sx={{mt:1}}>
              <Box sx={{}}>     
                <Box sx={{}}>
                  <Font variant="title">
                      {title}
                  </Font>
                </Box>
                <Box sx={{mt:1}}>
                  <Font>
                    {description}
                  </Font>
                </Box>
                <Box sx={{flexGrow:1}}/>
              </Box>
              
              <Box sx={{mt:2, mb:1}}>
                { flashHero ? <>
                  <FlashHero/>
                </> : <Image 
                    alt={`${title}. ${description}`}
                    src={image}
                    height={300}
              /> }
                
              </Box>
              <Box 
                id="markdown"
                sx={{
                  mt: 1,
                  mr: 1,
                  minHeight: minMdH,
                }}>
                  <Markdown html={html} />
              </Box>

              <Box sx={{mt:3}}>
                <Footer />
              </Box>
            <Box sx={{height: 70}} />
            <div id="bottomAnchor" />
          </Box>
          
        </Container>
      </>
}
