import * as React from "react"
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
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
  const children: any = []
  for (let i=0; i<allMarkdown.length; i++){
    if (parentSlug === allMarkdown[i].frontmatter.slug){
      parentDoc = allMarkdown[i]
    }
    if (slug === allMarkdown[i].frontmatter.parentSlug){
      children.push(allMarkdown[i]) 
    } 
  }

  return <>
          <Box sx={{ml: 1}}>
            <List dense>
              {parentDoc ? <>
                <ListItemButton
                  onClick={() => {
                    dispatch(navigate(parentDoc.frontmatter.slug, "_self"))
                    dispatch(setCoreKey("navDialogOpen", false))
                  }}>
                  <ListItemIcon>
                    <Icon icon={ parentDoc.frontmatter.slug === "/" ? "home" : parentDoc.frontmatter.icon} color="primary"/>
                  </ListItemIcon>
                  <ListItemText 
                    primary={<Font variant="small">
                              { parentDoc.frontmatter.slug === "/" ? "Home" : parentDoc.frontmatter.title}
                            </Font>}
                  />
                </ListItemButton>
              </> : null }            
        
              {children.length ? <>
                {children.map((item, i) => {
                  const {frontmatter} = item
                  return <ListItemButton key={`child_${i}`}
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

/*
  <pre>
  thisDoc: {JSON.stringify(thisDoc, null, 2)}
  </pre>
*/