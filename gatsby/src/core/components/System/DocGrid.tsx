import * as React from "react"
import {
  Box,
  Grid,
  Container,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material"
import {
  useAllMarkdown,
  useSiteMetadata,
  usePwaDispatch,
  navigate,
  Categories,
  Font,
  Icon,
  ScrollUp,
} from "../../../core"

export default function DocGrid() {
  const dispatch = usePwaDispatch()
  const siteMeta = useSiteMetadata()
  const allMarkdown = useAllMarkdown()
  const {
    version,
    siteImage,
    // siteDescription,
  } = siteMeta
  // let title = "This route is off the grid"
  // let description = siteDescription
  let image: any = siteImage

  return <>
    <Container maxWidth="md">
      <div id="topAnchor" />
      <Grid container spacing={1}>

        <Grid item xs={12} sm={4}>
          <Categories />
        </Grid>

        {image ? <Grid item xs={12} sm={8}>
              <Box sx={{mt:2}}>
                <Grid container spacing={1}>
                  {allMarkdown.map((doc: any, i:number) => {
                    // console.log("doc", doc)
                    const {
                      title,
                      description,
                      icon,
                      slug,
                    } = doc.frontmatter
                    return <Grid
                              item
                              xs={12}
                              md={6}
                              key={`doc_${i}`}

                            >
                              <ListItemButton
                                onClick={() => {
                                  dispatch(navigate(slug, "_self"))
                                }}>
                                <ListItemIcon>
                                  <Icon icon={icon} color={"primary"}/>
                                </ListItemIcon>
                                <ListItemText
                                  primary={<Font variant="title"fixedH={25}>
                                    {title}
                                  </Font>}
                                  secondary={<Font variant="small"fixedH={20}>
                                    {description}
                                  </Font>}
                                />
                                
                                
                              </ListItemButton>
                            
                          </Grid>
                  })}
                <Grid item xs={12} sm={4}>
                  {/* <pre>allMarkdown[3]: {JSON.stringify(allMarkdown[3], null, 2)}</pre> */}
                </Grid>
                </Grid>
              </Box>
          </Grid> : null }

        <Grid item xs={12}>
          <Box sx={{m:1.5, display: "flex"}}>
              <Box sx={{flexGrow:1}} />
              <Box sx={{m:1.5}}>
                  <Font variant="small" color="muted">
                    {version}
                  </Font>
              </Box>
              <Box>
                <ScrollUp />
              </Box>
          </Box>
        </Grid>

      </Grid>
      
      <div id="bottomAnchor" />
    </Container>
  </>
}
