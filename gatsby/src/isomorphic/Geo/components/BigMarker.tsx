import * as React from "react"
import {Marker} from 'react-map-gl'
import {
  useTheme,
  Avatar,
  IconButton,
  Card,
  CardHeader,
  CardContent,
} from "@mui/material"
import {
  Icon,
  Font,
  usePwaSelect,
  Image,
  selectDarkMode,
} from "../../../goldlabel"

export function BigMarker(props:any) {
  const [big, setBig] = React.useState<boolean>(true)
  const {
    frontmatter, 
    onMarkerClick,
  } = props
  const darkmode = usePwaSelect(selectDarkMode)
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
    //image,
  } = frontmatter
  if (!lat || !lng) return null
  // console.log("image", image)
  return <>
          <Marker
              latitude={lat} 
              longitude={lng}>
                {big ? <Card sx={{width: 320}}>
                  <CardHeader 
                    title={<Font variant="title">
                            {title}
                          </Font>}

                    subheader={<Font variant="small">
                                {description}
                              </Font>}
                    action={<>
                              <IconButton
                                onClick={() => {
                                  setBig(false)
                                }}>
                                  <Icon icon={"hide"} color="primary"/>
                              </IconButton>
                            </>}
                    // avatar={<Icon icon={icon} color="primary"/>}
                  />
                  <CardContent>
                    
                    <Image 
                      options={{
                        src: frontmatter.image,
                        height: 175,
                        alt: frontmatter.description,
                      }}
                    />
                  </CardContent>
                </Card> : <>
                    <IconButton
                      onClick={() => {
                        setBig(true)
                      }}>
                        <Avatar
                          sx={{
                            border: "1px solid " + borColor,
                            background: bgColor,
                            width: 50, 
                            height: 50,
                          }}
                        >
                        <Icon icon={icon} color="primary"/>
                      </Avatar>                    
                    </IconButton>
                  </>}
          </Marker> 
        </>
}
