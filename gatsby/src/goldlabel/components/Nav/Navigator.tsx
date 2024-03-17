import * as React from "react"
import {glConfig} from "../../../config"
import {
  Box,
  Chip,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  IconButton,
  Divider,
} from "@mui/material"
import {
  Font,
  Icon,
  usePwaDispatch,
  usePwaSelect,
  selectFrontmatter,
  navigate,
  useAllMarkdown,
  setCoreKey,
  ShareMenu,
  resetLocalstorage,
} from "../../../goldlabel"

export default function Navigator() {
  const showKeywords = false
  const dispatch = usePwaDispatch()
  const allMarkdown = useAllMarkdown()
  const frontmatter = usePwaSelect(selectFrontmatter)
  if(!frontmatter) return null
  let parentDoc: any = null
  const {
    slug, 
    parentSlug, 
    keywords,
  } = frontmatter
  const siblings: any = []
  const children: any = []
  let kw: any = []
  if (keywords) kw = keywords.split(",")
  for(let i = 0; i< kw.length; i++) kw[i] = kw[i].trim()
  for (let i=0; i<allMarkdown.length; i++){
    if (parentSlug === allMarkdown[i].frontmatter.slug){
      parentDoc = allMarkdown[i]
    }
    if (slug === allMarkdown[i].frontmatter.parentSlug){
      children.push(allMarkdown[i])
    } 
    if (parentSlug === allMarkdown[i].frontmatter.parentSlug) {
      siblings.push(allMarkdown[i])
    }
  }
  const onForgetMe = () => {
    let yehOK = window.confirm("Sure? You'll go away")
    if (yehOK) dispatch(resetLocalstorage())
  }

  const openGithubLink = () => {
    // "https://github.com/GoldlabelPr0/open-source", 
    dispatch(navigate(
      "https://github.com/listingslab-software/goldlabelopensource", 
      "_blank",
    ))
  }

  return <>
          <Box sx={{ml: 1}}>
            <List dense>
              <ListItemButton
                disabled={frontmatter.slug === "/"}
                onClick={() => {
                  dispatch(navigate("/", "_self"))
                  dispatch(setCoreKey("navDialogOpen", false))
                }}>
                <ListItemIcon>
                  <Icon icon="home" color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary={<Font variant="small">
                            Home
                          </Font>}
                />
              </ListItemButton>
              {children.length ? <>
                {children.map((item, i) => {
                  const {frontmatter} = item
                  return <ListItemButton key={`child_${i}`}
                            onClick={() => {
                              dispatch(setCoreKey("navDialogOpen", false))
                              dispatch(navigate(frontmatter.slug, "_self"))
                            }}>
                          <ListItemIcon>
                            <Icon icon={frontmatter.icon} color="primary" />
                          </ListItemIcon>
                          <ListItemText 
                            primary={<Font variant="small">
                                      {frontmatter.title}
                                    </Font>}
                          />
                        </ListItemButton>
                })}
              </> : null }

              {!children.length ? <>
                {siblings.map((item, i) => {
                  const {frontmatter} = item
                  return <ListItemButton key={`child_${i}`}
                          disabled={frontmatter.slug === slug ? true : false}
                          onClick={() => {
                            dispatch(setCoreKey("navDialogOpen", false))
                            dispatch(navigate(frontmatter.slug, "_self"))
                          }}>
                        <ListItemIcon>
                          <Icon icon={frontmatter.icon}  color="primary" />
                        </ListItemIcon>
                        <ListItemText 
                          primary={<Font variant="small">{frontmatter.title}</Font>}
                        />
                      </ListItemButton>
                })}
              </> : null }

            </List>

            {showKeywords ? <Box sx={{ml:1}}>
                {kw.map((keyword: any, i: number) => {
                  if (keyword === "") return null
                  return <Chip 
                            onClick={() => {
                              dispatch(navigate(`/keyword?${keyword}`, "_self"))
                              // console.log("navigate to ", keyword)
                            }}
                            key={`keyword_${i}`}
                            label={<Font variant="small">{keyword}</Font>}
                            size="small"
                          />
                })}
              </Box> : null }
              

            <Box sx={{display:"flex"}}>
              <Box sx={{ml:1}}>
                <Tooltip title={<Font color="white">
                                  Download
                                </Font>}>
                  <IconButton
                    color="primary"
                    sx={{}}
                    onClick={openGithubLink}>
                    <Icon icon={"github"} color="primary"/>
                  </IconButton>
                </Tooltip>
              </Box>
              
              <Box sx={{ml: 1, my:1, mt: 1.5}}>
                <Font variant="small" color={"primary"}>
                  {glConfig.version}
                </Font>
              </Box>            
            </Box>
          </Box>
      </>
}
