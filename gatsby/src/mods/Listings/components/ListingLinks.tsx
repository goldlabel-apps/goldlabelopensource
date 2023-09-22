import * as React from "react"
import {
  Box,
  Button,
  Avatar,
  Chip,
} from "@mui/material"
import {
  Icon,
  Font,
  usePwaDispatch,
  navigate,
} from "../../../../"

export default function ListingLinks(props: any) {
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
  // console.log("geoLocation", geoLocation)
  return (<>
            <Box sx={{}}>
              {email ? <Chip
                label={<Font variant="small">{email}</Font>}
                sx={{px:1, m:1, }}
                variant="outlined"
                color="primary"
                avatar={<Icon icon="email"/>}
                onClick={() => {
                  dispatch(navigate(`mailto:${email}`, "_blank"))
                }}
              /> : null }
              
              {facebook ? <Chip
                label={<Font variant="small">{facebook.substring(25, facebook.length-1)}</Font>}
                sx={{px:1, m:1, }}
                variant="outlined"
                color="primary"
                avatar={<Icon icon="facebook"/>}
                onClick={() => {
                  dispatch(navigate(facebook, "_blank"))
                }}
                
                
              /> : null }
            
              {website ? <Chip
                label={<Font variant="small">{website.substring(8, website.length-1)}</Font>}
                sx={{px:1, m:1, }}
                avatar={<Icon icon="site"/>}
                variant="outlined"
                color="primary"
                onClick={() => {
                  dispatch(navigate(website, "_blank"))
                }}
                
              /> : null }

              {phone ? <Chip
                label={<Font variant="small">{phone}</Font>}
                sx={{px:1, m:1, }}
                avatar={<Icon icon="phone"/>}
                variant="outlined"
                color="primary"
              /> : null }
            </Box>

          </>
  )
}

/*
              {email ? <>
                <Box>
                  <Button
                    fullWidth
                    onClick={() => {
                      
                    }}>
                      <Box sx={{mr:1.5, mt: 0.75}}>
                        <Icon icon={"email"}/>
                      </Box>
                      <Box sx={{width:"100%"}}>
                        <Font variant="small">
                          Email
                        </Font>
                      </Box>
                  </Button>
                </Box>
              </> : null }

              {phone ? <>
                <Box>
                  <Button
                    fullWidth
                    onClick={() => {
                      
                    }}>
                      <Box sx={{mr:1.5, mt: 0.75}}>
                        <Icon icon={"phone"}/>
                      </Box>
                      <Box sx={{width:"100%"}}>
                        <Font variant="small">
                          Phone
                        </Font>
                      </Box>
                  </Button>
                </Box>
              </> : null }

            {website ? <>
                <Box>
                  <Button
                    fullWidth
                    onClick={() => {
                      dispatch(navigate(website, "_blank"))
                    }}>
                      <Box sx={{mr:1.5, mt: 0.75}}>
                      <Icon icon={"site"}/>
                      </Box>
                      <Box sx={{width:"100%"}}>
                        <Font variant="small">
                          Website
                        </Font>
                      </Box>
                  </Button>
                </Box>
              </> : null }

              {facebook ? <>
                <Box>
                  <Button
                    fullWidth
                    onClick={() => {
                      dispatch(navigate(facebook, "_blank"))
                    }}>
                      <Box sx={{mr:1.5, mt: 0.75}}>
                      <Icon icon={"facebook"}/>
                      </Box>
                      <Box sx={{width:"100%"}}>
                        <Font variant="small">
                          Facebook
                        </Font>
                      </Box>
                  </Button>
                </Box>
              </> : null }
*/