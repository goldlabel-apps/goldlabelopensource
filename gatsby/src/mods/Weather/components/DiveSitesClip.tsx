import * as React from "react"
import {
  Box,
  Fab,
  List,
  ListItemText,
  Menu,
  ListItemButton,
  ListItemIcon,
  Tooltip,
} from "@mui/material"
import {
  Icon,
  Font,
  useAllMarkdown,
  usePwaDispatch,
  navigate,
} from "../../../goldlabel"
import {
  flyToLocation,
  toggleWeather,
} from "../../Weather"
import {
  fadeDiv,
} from "../../Flash"

export default function DiveSitesClip() {
  const dispatch = usePwaDispatch()
  const allMarkdown = useAllMarkdown()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  let flyTos: Array<any> = []
  for(let i=0; i<allMarkdown.length; i++){
    const {frontmatter} = allMarkdown[i]
    const {lat, lng, title, icon, category, slug} = frontmatter
    if (lat && lng && category === "diving" ) flyTos.push({
      title,
      lat,
      lng,
      icon,
      category,
      slug,
    })
  }
  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => setAnchorEl(null);

  return (
        <Box id="diveSitesClip"
          sx={{
            position: "absolute",
            opacity: 1,
            zIndex: 701,
            bottom: 50,
            right: 8,
          }}>
            {flyTos.length ? <>
              <Tooltip title="Dive Sites">
                <Fab
                  color="secondary"
                  onClick={handleClick}>
                  <Icon icon="diving" />
                </Fab>
              </Tooltip>
              <Menu
                 sx={{}}
                id="menuDiveSites-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'menuDiveSites-button',
                }}>
                  <Box sx={{m:2, width: 200}} />
                  <List dense>
                    <ListItemButton
                      onClick={(e: React.MouseEvent) => {
                        e.preventDefault()
                        dispatch(toggleWeather(false))
                        dispatch(fadeDiv("listings"))
                        dispatch(navigate("/diving", "_self"))
                        handleClose()
                      }}
                    >
                      <ListItemIcon>
                        <Icon icon="diving" />
                      </ListItemIcon>
                      <ListItemText 
                          primary={<Font variant="title">
                                      Dive Sites
                                    </Font>}
                        />
                    </ListItemButton>
                    
                {flyTos.map((item: any, i: number) => {
                  const {
                    title,
                  } = item
                  return <ListItemButton 
                            key={`menuDiveSites_${i}`}
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
