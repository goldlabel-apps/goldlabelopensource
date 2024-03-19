import * as React from "react"
import {
  Box,
  CardHeader,
} from "@mui/material"
import {
  Font,
  usePwaSelect,
  selectFingerprint,
} from "../../../goldlabel"
import {
  DeviceIcon,
} from "../../Theme"

export default function DisplayDevice() {

  const fingerprint = usePwaSelect(selectFingerprint)
  const {
    firstFingerprint,
  } = fingerprint
  if (!firstFingerprint) return null
  const {ua} = firstFingerprint
  const {
    browser,
    engine,
    os,
    device,
  } = ua
  const vendorStr = `${device.vendor} ${device.model}`
  const osStr = `${os.name} ${os.version}`
  const browserStr = `${browser.name} ${browser.major} ${engine.name}`

  return <Box sx={{}}>
          <CardHeader 
            avatar={<DeviceIcon needle={device.vendor}/>}
            title={<Font>{vendorStr}</Font>}
          />
          <CardHeader 
            avatar={<DeviceIcon needle={os.name}/>}
            title={<Font>{osStr}</Font>}
          />
          <CardHeader 
            avatar={<DeviceIcon needle={browser.name}/>}
            title={<Font>{browserStr}</Font>}
          />
        </Box>
}

/* 
<pre>ua: {JSON.stringify(ua, null, 2)}</pre>
*/
