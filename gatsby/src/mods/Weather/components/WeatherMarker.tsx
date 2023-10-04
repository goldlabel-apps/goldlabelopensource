import * as React from "react"
import {Marker} from 'react-map-gl'
import {
  useTheme,
  Avatar,
  IconButton,
  Box,
  CardMedia,
  Button,
} from "@mui/material"
import {
  Icon,
  Font,
  usePwaSelect,
  selectDarkMode,
  usePwaDispatch,
  selectWeather,
  navigate,
} from "../../../goldlabel"
import {
  toggleWeather,
  flyToLocation,
} from "../../Weather"
import {fadeDiv} from "../../Flash"


export function WeatherMarker(props:any) {  

  const onMarkerClick = () => {
    if (flyTo){
      dispatch(flyToLocation(null))
    } else {
      dispatch(flyToLocation({...options}))
    }
  }
  const dispatch = usePwaDispatch()
  const {options} = props
  const darkmode = usePwaSelect(selectDarkMode)
  const weather = usePwaSelect(selectWeather)
  const {flyTo} = weather
  const theme = useTheme()
  let borColor = theme.palette.primary.main
  let bgColor = "rgba(255,255,255,0.8)"
  if(darkmode) {
    borColor = theme.palette.primary.main
    bgColor = "rgba(0,0,0,0.8)"
  }
  const {
    lat,
    lng,
    icon,
    title,
    slug,
    image,
  } = options  
  if (!lat || !lng) return null
  let isMe = false
  if (flyTo){
    if (slug !== flyTo.slug) isMe = true
  }
  if (flyTo && isMe) return null
  
  return <>
          <Marker
              latitude={lat} 
              longitude={lng}>
                <Box sx={{
                      width: 250, 
                      textAlign: "center",
                    }}>
                    <IconButton
                          onClick={onMarkerClick}>
                            <Avatar
                              sx={{
                                border: "2px solid " + borColor,
                                background: bgColor,
                                width: 35, 
                                height: 35}}>
                            <Icon icon={icon} color="primary"/>
                          </Avatar>                    
                    </IconButton>
                </Box>
                {flyTo ? <Box sx={{
                                background: "rgba(255,255,255,0.2)", 
                                width: 250, 
                                display:"flex",
                              }}>
                  {image ? <><Box>
                    <CardMedia 
                      sx={{mr:1, borderRadius: 1, border: "1px solid " + borColor,}}
                      component={"img"}
                      height={100}
                      src={image}
                      alt={title}
                    />
                  </Box></> : null }
                  <Box sx={{margin: "auto", px:1}}>
                    <Font>
                      {title}
                    </Font>
                    <Button
                      sx={{mt:2}}
                      size="small"
                      color="secondary"
                      variant="contained"
                      onClick={(e: React.MouseEvent) => {
                        e.preventDefault()
                        dispatch(flyToLocation(null))
                        dispatch(toggleWeather(false))
                        dispatch(fadeDiv("listings"))
                        dispatch(navigate(slug, "_self"))
                      }}
                    >
                    More
                    </Button>
                  </Box>
                  
                  
                </Box> : null }

                
          </Marker> 
        </>
}

 