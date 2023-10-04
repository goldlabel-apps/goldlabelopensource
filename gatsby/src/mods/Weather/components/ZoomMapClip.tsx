import * as React from "react"
import {
  Box,
  Fab,
  List,
  ListItemText,
  Menu,
  ListItemButton,
  ListItemIcon,
} from "@mui/material"
import {
  Icon,
  Font,
  useAllMarkdown,
  usePwaDispatch,
  // usePwaSelect,
  // selectWeather,
} from "../../../goldlabel"
import {
  flyToLocation,
} from "../../Weather"

export default function ZoomMapClip() {
  const dispatch = usePwaDispatch()
  const allMarkdown = useAllMarkdown()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  let flyTos: Array<any> = []
  for(let i=0; i<allMarkdown.length; i++){
    const {frontmatter} = allMarkdown[i]
    const {lat, lng, title, icon, category} = frontmatter
    if (lat && lng && category === "diving" ) flyTos.push({
      title,
      lat,
      lng,
      icon,
    })
  }
  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => setAnchorEl(null);

  return (
        <Box id="zoomMapClip"
          sx={{
            position: "absolute",
            opacity: 1,
            zIndex: 702,
            bottom: 50,
            right: 8,
          }}>
            {flyTos.length ? <>
              <Fab
                color="primary"
                onClick={handleClick}>
                <Icon icon="zoomin" color="secondary" />
              </Fab>
              <Menu
                 sx={{mt:2}}
                id="menuDiveSites-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'menuDiveSites-button',
                }}>
                  <List dense>
                    {/* <Box sx={{m:2, width: 200}}>
                      <Font variant="title">
                        Map Controls
                      </Font>
                    </Box> */}
                    {/* <ListItemButton 
                      onClick={(e: React.MouseEvent) => {
                        e.preventDefault()
                        
                        handleClose()
                      }}>
                        <ListItemIcon>
                          <Icon icon="zoomin" color="primary" />
                        </ListItemIcon>
                        <ListItemText 
                          primary={<Font>{"Zoom In"}</Font>}
                        />
                    </ListItemButton> */}

                    <ListItemButton 
                      onClick={(e: React.MouseEvent) => {
                        e.preventDefault()
                        dispatch(flyToLocation(null))
                        handleClose()
                      }}>
                        <ListItemIcon>
                          <Icon icon="refresh" color="primary" />
                        </ListItemIcon>
                        <ListItemText 
                          primary={<Font>
                                    Reset
                                  </Font>}
                        />
                    </ListItemButton>
                </List>
              </Menu>
            </> : null }
        </Box>
  )
}
