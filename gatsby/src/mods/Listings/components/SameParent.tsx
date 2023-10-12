import * as React from "react"
import {
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material"
import {
  Icon,
  Font,
  useAllMarkdown,
  usePwaDispatch,
  usePwaSelect,
  selectFrontmatter,
  useSameParent,
  navigate,
} from "../../../goldlabel"
import {fadeDiv} from "../../Flash"

export default function SameParent() {
  const dispatch = usePwaDispatch()
  const frontmatter = usePwaSelect(selectFrontmatter)
  if (!frontmatter) return null
  const {slug, parentSlug} = frontmatter
  const allMarkdown = useAllMarkdown()
  const sameParent = useSameParent(slug, allMarkdown)
  const siblings = useSameParent(parentSlug, allMarkdown)
  if (!parentSlug) return null
  let parent:any = null
  for (let i=0; i<allMarkdown.length; i++){
    if(parentSlug === allMarkdown[i].frontmatter.slug)
    parent = allMarkdown[i]
  }
  return (
    <>
      {sameParent.length ? <>
        {sameParent.map((sibling: any, i: number) => {
          const {
            title,
            icon,
            
          } = sibling
          if (slug === sibling.slug) return null
          return <ListItemButton 
                  key={`sibling_${i}`}
                  onClick={() => {
                    dispatch(fadeDiv("listings"))
                    dispatch(navigate(sibling.slug, "_self"))
                  }}>
                  <ListItemIcon>
                    <Icon icon={icon} color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary={<Font variant="small">{title}</Font>}
                  />
                </ListItemButton>
        })}
      </> : null }

      {siblings.length && !sameParent.length ? <>
        {siblings.map((sibling: any, i: number) => {
          const {
            title,
            icon,
          } = sibling 
          return <ListItemButton 
                  key={`sibling_${i}`}
                  onClick={() => {
                    dispatch(fadeDiv("listings"))
                    dispatch(navigate(sibling.slug, "_self"))
                  }}>
                  <ListItemIcon>
                    <Icon icon={icon} color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary={<Font variant="small">{title}</Font>}
                  />
                </ListItemButton>
        })}
      </> : null }

    </>
  )
}

/* <pre>{JSON.stringify(sameParent, null, 2)}</pre> */