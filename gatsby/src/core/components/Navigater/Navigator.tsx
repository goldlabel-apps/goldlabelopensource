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
} from "../../../core"

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
  // console.log("parent", parentDoc)
  return <>
          <Box sx={{}}>
            <List>

            

              {/* {slug !== "/" ? <>
                <ListItemButton
                  onClick={() => {
                    dispatch(navigate("/", "_self"))
                  }}
                >
                  <ListItemIcon>
                    <Icon icon="home" />
                  </ListItemIcon>
                  <ListItemText 
                    primary={<Font>Home</Font>}
                  />
                </ListItemButton>
              </> : null} */}
              
              
              {parentDoc ? <>
                <ListItemButton
                  onClick={() => {
                    dispatch(navigate(parentDoc.frontmatter.slug, "_self"))
                  }}>
                  
                  <ListItemText 
                    primary={<Font>{parentDoc.frontmatter.title}</Font>}
                  />
                  <ListItemIcon>
                    <Icon icon="up" color="inherit"/>
                  </ListItemIcon>
                </ListItemButton>
              </> : null }

              <ListItemButton
                disabled
                onClick={() => {
                  dispatch(navigate(frontmatter.slug, "_self"))
                }}
              >
                <ListItemIcon>
                  <Icon icon={frontmatter.icon} />
                </ListItemIcon>
                <ListItemText 
                  primary={<Font>{frontmatter.title}</Font>}
                />
                
              </ListItemButton>
        
              {children.length ? <>
              
                {children.map((item, i) => {
                  const {frontmatter} = item
                  return <ListItemButton key={`child_${i}`}
                            onClick={() => {
                              // console.log("frontmatter", frontmatter)
                              dispatch(navigate(frontmatter.slug, "_self"))
                            }}>
                          
                          <ListItemText 
                            primary={<Font>{frontmatter.title}</Font>}
                          />

                          <ListItemIcon>
                            <Icon icon={"right"} />
                          </ListItemIcon>


                        </ListItemButton>
                })}
              </> : null }
              

              {/* <Box sx={{mx:1}}>
                <pre>
                thisDoc: {JSON.stringify(thisDoc, null, 2)}
                </pre>
              </Box> */}
              
              
            </List>
          </Box>
      </>
}
