import * as React from "react"
import {Marker} from 'react-map-gl'
import {
  useTheme,
  Avatar,
  IconButton,
  Box,
  CardMedia,
  CardHeader,
  CardContent,
  Card,
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
    description,
    slug,
    image,
  } = options  
  // console.log("description", description)
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
                      width: 300, 
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
                            <Icon icon={flyTo ? "close" : icon} color="primary"/>
                          </Avatar>                    
                    </IconButton>
                </Box>
                {flyTo ? <Card sx={{
                                width: 300,
                              }}>
                  
                    <CardHeader 
                      action={<>
                                <IconButton
                                  sx={{}}
                                  color="primary"
                                  onClick={(e: React.MouseEvent) => {
                                    e.preventDefault()
                                    dispatch(flyToLocation(null))
                                    dispatch(toggleWeather(false))
                                    dispatch(fadeDiv("listings"))
                                    dispatch(navigate(slug, "_self"))
                                  }}>
                                  <Icon icon="link"/>
                                </IconButton>
                              </>}
                      title={<Font>
                        {title}
                      </Font>}
                    />
                    
                    {image ? <>
                    <CardMedia 
                      sx={{mr:1, borderRadius: 1}}
                      component={"img"}
                      height={100}
                      src={image}
                      alt={title}
                    />
                    
                  </> : null }
                  <CardContent>
                    <Font>
                      {description}
                    </Font>
                  </CardContent>
                  
                </Card> : null }

                
          </Marker> 
        </>
}

 