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

                <Tooltip title={`${city}, ${country}`}>              
                  <Avatar 
                    sx={{width: "26px", height: "26px", mt:0.5, mr:1.5}} 
                    src={`/svg/flags/${flag}.svg`} 
                  />
                </Tooltip>
                
                <Tooltip title={`${host}`}>  
                  <Avatar
                    sx={{width: "32px", height: "32px", mt:0.5, mx:1.5}} 
                    src={iconFromHost(host, allHosts)} />
                </Tooltip>

                <Device 
                  osName={osName} 
                  browserName={browserName} 
                  vendor={vendor}
                />

              </Box>
            </>}
          />
        </>
}

/* 
*/
