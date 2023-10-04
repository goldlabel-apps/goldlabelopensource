import * as React from "react"
import {
  Box,
  Fab,
  List,
  ListItemText,
  Menu,
  ListItemButton,
} from "@mui/material"
import {
  Icon,
  Font,
  useAllMarkdown,
  usePwaDispatch,
} from "../../../goldlabel"
import {
  flyToLocation,
} from "../../Weather"

export default function DiveShopsClip() {
  const dispatch = usePwaDispatch()
  const allMarkdown = useAllMarkdown()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  let flyTos: Array<any> = []
  for(let i=0; i<allMarkdown.length; i++){
    const {frontmatter} = allMarkdown[i]
    const {lat, lng, title, icon, category, slug, image} = frontmatter
    if (lat && lng && category === "dive-shops" ) flyTos.push({
      title,
      lat,
      lng,
      icon,
      category,
      slug,
      image,
    })
  }
  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => setAnchorEl(null);

  return (
        <Box id="diveShopsClip"
          sx={{
            position: "absolute",
            opacity: 1,
            zIndex: 733,
            bottom: 184,
            right: 8,
          }}>
            {flyTos.length ? <>
              <Fab
                color="primary"
                onClick={handleClick}>
                <Icon icon="diveshop" color="secondary" />
              </Fab>
              <Menu
                 sx={{mt:2}}
                id="menuDiveShops-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'menuDiveShops-button',
                }}>
                  <List dense>
                    <Box sx={{m:2, width: 200}}>
                      <Font variant="title">
                        Dive Shops
                      </Font>
                    </Box>
                {flyTos.map((item: any, i: number) => {
                  const {
                    title,
                  } = item
                  return <ListItemButton 
                            key={`menuDiveShops_${i}`}
                            onClick={(e: React.MouseEvent) => {
                              e.preventDefault()
                              dispatch(flyToLocation(item))
                              handleClose()
                            }}>
                              <ListItemText 
                                primary={<Font>{title}</Font>}
                              />
                        </ListItemButton>
                })}
                </List>
              </Menu>
            </> : null }
        </Box>
  )
}
