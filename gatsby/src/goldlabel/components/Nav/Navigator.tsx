import * as React from "react"
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  ButtonBase,
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
} from "../../../goldlabel"

export default function Navigator() {
  const dispatch = usePwaDispatch()
  const allMarkdown = useAllMarkdown()
  const frontmatter = usePwaSelect(selectFrontmatter)
  if(!frontmatter) return null
  let parentDoc: any = null
  const {slug, parentSlug} = frontmatter
  const siblings: any = []
  const children: any = []
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

  const openGithubLink = () => {
    // rel="noopener noreferrer"
    dispatch(navigate(
      "https://github.com/listingslab-software/goldlabelopensource", 
      "_blank",
    ))
  }

  return <>
          <Box sx={{ml: 1}}>

            <ButtonBase
              title="Free on GitHub"
              sx={{
                p:1,
              }}
              onClick={openGithubLink}>
                <Box sx={{mr: 1}}>
                  <Icon icon="github" color="primary" />
                </Box>
                <Box sx={{}}>
                  <Font>
                    Download Free
                  </Font>
                </Box>
            </ButtonBase>


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
            
          </Box>
      </>
}
