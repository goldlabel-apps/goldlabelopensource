import * as React from "react"
import {
  Avatar,
  Box,
  CardHeader,
  Tooltip,
} from "@mui/material"
import {
  usePwaDispatch,
  usePwaSelect,
  Device,
  selectCore,
  selectPingpong,
} from "../../../core"
import {iconFromHost} from "../utils"

export default function PingPublic() {
  const pingpong = usePwaSelect(selectPingpong)
  const core = usePwaSelect(selectCore)
  const {allHosts} = core
  const {device, ipGeo, host} = pingpong
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
                <Box sx={{ml: -0.5}}>
                <Tooltip title={`${host}`}>  
                  <Avatar
                    sx={{
                      width: "30px", 
                      height: "30px", 
                      mt: 0.5, 
                      mr: 1
                    }} 
                    src={iconFromHost(host, allHosts)} />
                </Tooltip>
                </Box>
                <Box>
                <Device 
                  osName={osName} 
                  browserName={browserName} 
                  vendor={vendor}
                />
                </Box>
                <Box>
                <Tooltip title={`${city}, ${country}`}>              
                  <Avatar 
                    sx={{
                      width: "24px", 
                      height: "24px", 
                      mt: 1, 
                      ml: 1
                    }} 
                    src={`/svg/flags/${flag}.svg`} 
                  />
                </Tooltip>
                </Box>
              </Box>
            </>}
          />
        </>
}

/* 
*/
