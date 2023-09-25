import * as React from "react"
import {
  useTheme,
  useMediaQuery,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material"
import {
  Font,
  Icon,
  usePwaDispatch,
  useAllMarkdown,
  useChildPages,
  navigate,
  toggleCategories,
} from "../../../goldlabel"
import {fadeDiv} from "../../Flash"

export default function ChildList(props: any) {
  const {frontmatter} = props
  const dispatch = usePwaDispatch()
  let showFeatured: boolean = false
  let parentSlug = "/"
  const allMarkdown = useAllMarkdown()
  const theme = useTheme()
  const isBig = useMediaQuery(theme.breakpoints.up("md"))
  if (frontmatter) parentSlug = frontmatter.parentSlug
  const allChildren = useChildPages(parentSlug, allMarkdown)
  if (allChildren.length < 2) showFeatured = true
  console.log("parentSlug", parentSlug)
  return (
    <List dense>    
      {allChildren.map((item: any, i: number) => {
          const {
            title,
            slug,
            icon,
            // image,
            category,
            description,
        } = item 
        if(frontmatter.category !== category) return null
        if(frontmatter.slug === slug) return null
        return <ListItemButton
                  key={`book_${i}`}
                  onClick={() => {
                    if (!isBig) dispatch(toggleCategories(false))
                    dispatch(fadeDiv("listings"))
                    dispatch(navigate(slug, "_self"))
                  }}
                >
                  <ListItemIcon>
                    <Icon icon={icon} color="primary"/>
                  </ListItemIcon>
                  <ListItemText 
                    primary={<Font>{title}</Font>}
                  />
                </ListItemButton>
            })}
      </List>
  )
}
