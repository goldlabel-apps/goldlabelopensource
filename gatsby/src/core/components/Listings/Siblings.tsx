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
  useSiblings,
  navigate,
  usePwaDispatch,
  usePwaSelect,
  selectFrontmatter,
} from "../../../core"

export default function Siblings(props: any) {
  const {
    descriptions,
    icons,
  } = props
  const frontmatter = usePwaSelect(selectFrontmatter)
  // console.log("frontmatter", frontmatter)
  if(!frontmatter) return null
  const dispatch = usePwaDispatch()
  if (!frontmatter) return null
  const {
    slug,
    parentSlug,
  } = frontmatter
  const allMarkdown = useAllMarkdown()
  const siblings = useSiblings(slug, parentSlug ,allMarkdown)
  
  return <>
  
  <List dense>
    {siblings.map((item: any, i: number) => {
      const {
        title,
        description,
        icon,
      } = item
      if (!title) return null
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

{flags && flag ? <ListItemAvatar>
                    <Avatar src={`/svg/flags/${flag || "eu"}.svg`} />
                  </ListItemAvatar> : null }
  <pre>{JSON.stringify(childDocs.length, null, 2)}</pre>
*/