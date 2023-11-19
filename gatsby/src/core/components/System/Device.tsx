import React from "react"
import {
  IconButton,
  Tooltip,
} from "@mui/material"
import {
  Icon,
} from "../../../core"

type DeviceShape = {
    os: string
    browser: string
    device: string
}

export function Device({os, browser, device}: DeviceShape) {

  if (!os || !browser || !device) return null

  let iconOs: any = "desktop"
  if (os.includes("Linux")) iconOs = "linux"
  if (os.includes("iOS")) iconOs = "mac"
  if (os.includes("Mac")) iconOs = "mac"
  if (os.includes("Windows")) iconOs = "windows"
  if (os.includes("Android")) iconOs = "android"
  
  let iconBrowser: any = "web"
  if (browser.includes("Chrome")) iconBrowser = "chrome"
  if (browser.includes("Facebook")) iconBrowser = "facebook"
  if (browser.includes("Opera")) iconBrowser = "web"
  if (browser.includes("Safari")) iconBrowser = "safari"
  if (browser.includes("Samsung")) iconBrowser = "web"
  if (browser.includes("Firefox")) iconBrowser = "firefox"
  
  let iconDevice: any = "mobile"
  if (device.includes("Macintosh")) iconDevice = "desktopmac"
  if (device.includes("iPhone")) iconDevice = "iphone"
  if (device.includes("Chromium")) iconDevice = "chrome"

  return (<>
          { browser !== " " ? <Tooltip title={browser}>
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
          {device !== " " ? <Tooltip title={device === " " ? "Generic" : device}>
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

            {os !== " " ? <Tooltip title={os}>
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
            
          </>
  )
}

