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
  TogglePaletteMode,
  resetLocalstorage,
} from "../../../goldlabel"
import { FingerprintToggle} from "../../../isomorphic/Fingerprint"
import { FlashToggle } from "../../../isomorphic/Flash"
import { FormsToggle } from "../../../isomorphic/Forms"
import { GeoToggle } from "../../../isomorphic/Geo"
import { LinguaToggle } from "../../../isomorphic/Lingua"
import { ThemeToggle } from "../../../isomorphic/Theme"

export default function Navigator() {
  
  const showForget = false
  const showShare = false
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
          <Divider />
            <Box sx={{m: 1, display: "flex"}}>
              
              {glConfig.isomorphic.fingerprint.enabled ? <FingerprintToggle /> : null}
              {glConfig.isomorphic.flash.enabled ? <FlashToggle /> : null}
              {glConfig.isomorphic.forms.enabled ? <FormsToggle /> : null}
              {glConfig.isomorphic.geo.enabled ? <GeoToggle /> : null}
              {glConfig.isomorphic.lingua.enabled ? <LinguaToggle /> : null}
              {glConfig.isomorphic.theme.enabled ? <ThemeToggle /> : null}
        
              {showForget ? <Tooltip title={<Font color="white">
                Forget yourself
              </Font>}>
                <IconButton
                  color="primary"
                  sx={{}}
                  onClick={onForgetMe}>
                  <Icon icon={"forget"} color="primary"/>
                </IconButton>
              </Tooltip> : null }
              
              {showShare ? <ShareMenu /> : null }
            </Box>
          
            <Divider />
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
