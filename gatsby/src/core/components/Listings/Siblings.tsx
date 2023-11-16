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
  const dispatch = usePwaDispatch()
  const {
    descriptions,
    icons,
  } = props
  const frontmatter = usePwaSelect(selectFrontmatter)
  if(!frontmatter) return null
  const {
    slug,
    parentSlug,
  } = frontmatter
  const allMarkdown = useAllMarkdown()
  const siblings = useSiblings(slug, parentSlug ,allMarkdown)
  let parentTitle = ""
  for (let i=0; i < allMarkdown.length; i++){
    if (allMarkdown[i].frontmatter.slug === parentSlug){
      parentTitle = allMarkdown[i].frontmatter.title
    }
  }
  return <>
          <List dense>
              {parentSlug ? <ListItemButton
                sx={{mb:1}}
                color="primary"
                onClick={() => {
                dispatch(navigate(parentSlug, "_self"))
              }}>
                <ListItemText
                  primary={<Font variant={!descriptions ? "small" : ""}>
                              {parentTitle}
                            </Font> }
                />
                {icons ? <ListItemIcon>
                  <Icon icon={"left"} color="primary"/>
                </ListItemIcon> : null }
            </ListItemButton> : null }
                
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
                          
                        <ListItemText
                          primary={<Font variant={!descriptions ? "small" : ""}>
                                      {title}
                                    </Font> }
                          secondary={descriptions ? <Font variant="small">
                                      {description}
                                    </Font> : null }
                        />
                        {icons ? <ListItemIcon>
                          <Icon icon={icon} color="primary"/>
                        </ListItemIcon> : null }
                      </ListItemButton>
            })}
          </List>
  </>
}
