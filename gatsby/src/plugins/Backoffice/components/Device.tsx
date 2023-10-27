import React from "react"
import {
  IconButton,
  Tooltip,
} from "@mui/material"
import {
  Icon,
} from "../../../core"

/*
firefox
xbox
windows
mac
linux
android
safari,
desktop
desktopmac
mobile
iphone
edge
chrome
*/

type DeviceShape = {
    os: string
    browser: string
    device: string
}

export function Device({os, browser, device}: DeviceShape) {

  let iconOs: any = null
  if (os.includes("Linux")) iconOs = "linux"
  if (os.includes("iOS")) iconOs = "mac"
  if (os.includes("Mac")) iconOs = "mac"
  if (os.includes("Windows")) iconOs = "windows"
  

  let iconBrowser: any = null
  if (browser.includes("Chrome")) iconBrowser = "chrome"
  if (browser.includes("Facebook")) iconBrowser = "facebook"
  if (browser.includes("Opera")) iconBrowser = "web"
  if (browser.includes("Safari")) iconBrowser = "safari"
  
  let iconDevice: any = null
  if (device.includes("Macintosh")) iconDevice = "desktopmac"
  if (device.includes("iPhone")) iconDevice = "iphone"


  return (<>
            
            {browser !== " " ? <Tooltip title={browser}>
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
            

            {/* <pre>os: {JSON.stringify(os, null, 2)}</pre>
            <pre>browser: {JSON.stringify(browser, null, 2)}</pre>
            <pre>device: {JSON.stringify(device, null, 2)}</pre> */}
          </>
  )
}

