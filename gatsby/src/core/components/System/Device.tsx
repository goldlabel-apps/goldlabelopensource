import React from "react"
import {
  Box,
  IconButton,
  Tooltip,
} from "@mui/material"
import {
  Icon,
} from "../../../core"

type DeviceShape = {
    osName: string
    browserName: string
    vendor: string
}

export function Device({osName, browserName, vendor}: DeviceShape) {

  if (!osName || !browserName || !vendor) return null

  let iconOs: any = "desktop"
  if (osName.includes("Linux")) iconOs = "linux"
  if (osName.includes("iOS")) iconOs = "mac"
  if (osName.includes("Mac")) iconOs = "mac"
  if (osName.includes("Windows")) iconOs = "windows"
  if (osName.includes("Android")) iconOs = "android"
  
  let iconBrowser: any = "web"
  if (browserName.includes("Chrome")) iconBrowser = "chrome"
  if (browserName.includes("Facebook")) iconBrowser = "facebook"
  if (browserName.includes("Opera")) iconBrowser = "web"
  if (browserName.includes("Safari")) iconBrowser = "safari"
  if (browserName.includes("Samsung")) iconBrowser = "web"
  if (browserName.includes("Firefox")) iconBrowser = "firefox"
  
  let iconDevice: any = "mobile"
  if (vendor.includes("Macintosh")) iconDevice = "desktopmac"
  if (vendor.includes("iPhone")) iconDevice = "iphone"
  if (vendor.includes("Chromium")) iconDevice = "chrome"

  return (<>
        <Box>
          
          

            { osName !== " " ? <Tooltip title={osName}>
              <IconButton
                color="primary"
                onClick={(e: React.MouseEvent)=> {
                  e.preventDefault()
                  // dispatch(showSameOS("os", os))
                }}
              >
                <Icon icon={iconOs}/>
              </IconButton>
            </Tooltip> : null }

            { browserName !== " " ? <Tooltip title={browserName}>
              <IconButton
                color="primary"
                onClick={(e: React.MouseEvent)=> {
                  e.preventDefault()
                  // dispatch(uidSelect(uid))
                }}
              >
                <Icon icon={iconBrowser}/>
              </IconButton>
            </Tooltip> : null }
            </Box>
          </>
  )
}

/*
{ vendor !== " " ? <Tooltip title={vendor === " " ? "Generic" : vendor}>
              <IconButton
                color="primary"
                onClick={(e: React.MouseEvent)=> {
                  e.preventDefault()
                  // dispatch(uidSelect(uid))
                }}
              >
                <Icon icon={iconDevice} />
              </IconButton>
            </Tooltip> : null }
*/