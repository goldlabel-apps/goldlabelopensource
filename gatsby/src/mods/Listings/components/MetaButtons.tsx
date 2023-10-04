import * as React from "react"
import {
  Box,
  Chip,
} from "@mui/material"
import {
  Icon,
  Font,
  usePwaDispatch,
  navigate,
} from "../../../goldlabel"

export default function MetaButtons(props: any) {
  const dispatch = usePwaDispatch()
  let geoLocation: any = null
  const {frontmatter} = props
  const {
    icon,
    phone,
    website,
    facebook,
    email,
    lat,
    lng,
    zoom,
  } = frontmatter
  if (lat && lng){
    geoLocation = {
      lat,
      lng,
      zoom,
      icon,
    }
  }
  const hideEmail = false
  
  return (<>
            <Box sx={{}}>
            {email && !hideEmail? <Chip
                variant="outlined"
                color="primary"
                label={<Font variant="small">Message</Font>}
                sx={{px:1, mr:0.5, mb:0.5}}
                avatar={<Icon icon="email"/>}
                onClick={() => {
                  dispatch(navigate(`mailto:${email}`, "_blank"))
                }}
              /> : null }
            {facebook ? <Chip
                variant="outlined"
                color="primary"
                label={<Font variant="small">Facebook</Font>}
                sx={{px:1, mr:0.5, mb:0.5 }}
                avatar={<Icon icon="facebook"/>}
                onClick={() => {
                  dispatch(navigate(facebook, "_blank"))
                }}
              /> : null }


              
              
              {website ? <Chip
                variant="outlined"
                color="primary"
                label={<Font variant="small">Web</Font>}
                sx={{px:1, mr:0.5, mb:0.5 }}
                avatar={<Icon icon="site"/>}
                onClick={() => {
                  dispatch(navigate(website, "_blank"))
                }}
                
              /> : null }

              {phone ? <Chip
                variant="outlined"
                color="primary"
                label={<Font variant="small">{phone}</Font>}
                sx={{px:1, mr:0.5, mb:0.5 }}
                avatar={<Icon icon="phone"/>}
                onClick={() => {
                  dispatch(navigate(`tel:${phone}`, "_blank"))
                }}
              /> : null }
            </Box>

          </>
  )
}

/*
label={<Font variant="small">{website.substring(8, website.length-1)}</Font>}
*/