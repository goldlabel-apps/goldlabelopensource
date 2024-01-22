import * as React from "react"
import {
  Avatar,
  Box,
  CardHeader,
  Tooltip,
} from "@mui/material"
import {
  usePwaSelect,
  Device,
  selectCore,
  selectPingpong,
} from "../../../core"

export default function PingPublic() {
  const pingpong = usePwaSelect(selectPingpong)
  const core = usePwaSelect(selectCore)
  const {device, ipGeo} = pingpong
  let browserName = ""
  let osName = ""
  let vendor = ""
  let flag = ""
  let country = ""
  let city = ""

  if (ipGeo){
    flag = ipGeo.country_code2.toLowerCase()
    country = ipGeo.country_name
    city = ipGeo.city
  }
  if (device){
    browserName = device.browser.name
    osName = device.os.name
    vendor = device.device.vendor
  }

  return <>
          <CardHeader 
            avatar={<>
              <Box sx={{display: "flex"}}>
                <Box>
                  <Tooltip title={`${city}, ${country}`}>              
                    <Avatar 
                      sx={{
                        width: "24px", 
                        height: "24px", 
                        mt: 1, 
                        mr: 1
                      }} 
                      src={`/svg/flags/${flag}.svg`} 
                    />
                  </Tooltip>
                </Box>

                <Box>
                  <Device 
                    osName={osName} 
                    browserName={browserName} 
                    vendor={vendor}
                  />
                </Box>
              </Box>
            </>}
          />
        </>
}

/* 
*/
