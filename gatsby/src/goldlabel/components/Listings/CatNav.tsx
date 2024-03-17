import * as React from 'react'
import {
  Box,
  Breadcrumbs,
  Link,
  useTheme,
  useMediaQuery,
} from "@mui/material"
import {
  Icon,
  Font,
  useAllMarkdown,
  usePwaSelect,
  usePwaDispatch,
  selectFrontmatter,
  navigate,
  ShareMenu,
} from "../../../goldlabel"

export default function CatNav() {
  const dispatch = usePwaDispatch()
  const allMarkdown = useAllMarkdown()
  const frontmatter = usePwaSelect(selectFrontmatter)
  const theme = useTheme()
  const isBig = useMediaQuery(theme.breakpoints.up("md"))
  if (!frontmatter) return null
  const {parentSlug} = frontmatter
  const {slug} = frontmatter
  let parent:any = null
  for (let i=0; i<allMarkdown.length; i++){
    if(parentSlug === allMarkdown[i].frontmatter.slug)
    parent = allMarkdown[i]
  }

  
  return (
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ 
            display: 'flex', 
            alignItems: 'center'
          }}
          color="inherit"
          href="/"
        >
          <Box sx={{ pt: 0.5, pr: 1 }}>
              <Icon icon="home" color="primary"  />
          </Box>
          {isBig ? <Font variant="small">
            Home
          </Font> : null }
          
        </Link>
        

        {slug !== "/" ? <Box
          sx={{ 
            display: 'flex', 
            alignItems: 'center' 
          }}>
            <Box sx={{ pt: 0.5, pr: 1 }}>
              <Icon icon={frontmatter.icon} color="primary"  />
            </Box>
            {isBig ? <Font variant="small">
              {frontmatter.title}
            </Font> : null }
        </Box> : null }
        
        <ShareMenu />
        
      </Breadcrumbs>
  )
}
