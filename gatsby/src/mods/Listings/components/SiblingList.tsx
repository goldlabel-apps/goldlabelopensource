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
  usePwaSelect,
  selectPWA,
  useAllMarkdown,
  usePagesByCategory,
  navigate,
  toggleCategories,
} from "../../../goldlabel"
import {fadeDiv} from "../../Flash"

export default function SiblingList() {
  const dispatch = usePwaDispatch()
  let showFeatured: boolean = false
  let cat = "all"
  const allMarkdown = useAllMarkdown()
  const pwa = usePwaSelect(selectPWA)
  const theme = useTheme()
  const isBig = useMediaQuery(theme.breakpoints.up("md"))
  const {
    frontmatter,
  } = pwa
  if (frontmatter) cat = frontmatter.category
  const allSiblings = usePagesByCategory(cat, allMarkdown)
  if (allSiblings.length < 2) showFeatured = true
  
  return (
    <List dense>    
      {allSiblings.map((item: any, i: number) => {
          const {
            title,
            slug,
            icon,
            category,
        } = item 
        if(frontmatter.category !== category) return null
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
