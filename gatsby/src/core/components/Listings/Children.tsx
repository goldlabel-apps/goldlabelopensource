import * as React from 'react'
import {
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material"
import {
  Font,
  Icon,
  useAllMarkdown,
  useChildren,
  navigate,
  usePwaDispatch,
} from "../../../core"

export default function Children(props: any) {
  const {
    frontmatter,
    descriptions,
    icons,
  } = props
  
  const dispatch = usePwaDispatch()
  if(!frontmatter) return null
  const {
    slug,
  } = frontmatter
  const allMarkdown = useAllMarkdown()
  const children = useChildren(slug, allMarkdown)
  return <>
  <List dense sx={{}}>
    {children.map((item: any, i: number) => {
      const {
        title,
        description,
        icon,
      } = item
      return <ListItemButton
                color="primary"
                key={`childDoc_${i}`}
                onClick={() => {
                  dispatch(navigate(item.slug, "_self"))
                }}>
                  {icons ? <ListItemIcon>
                  <Icon icon={icon} color="primary"/>
                </ListItemIcon> : null }
                <ListItemText
                  primary={<Font variant={!descriptions ? "small" : ""}>
                              {title}
                            </Font> }
                  secondary={descriptions ? <Font variant="small">
                              {description}
                            </Font> : null }
                />
                
              </ListItemButton>
    })}
  </List>
  </>
  

}

/*
  <pre>{JSON.stringify(childDocs.length, null, 2)}</pre>
*/