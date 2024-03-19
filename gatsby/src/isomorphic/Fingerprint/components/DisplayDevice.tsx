import * as React from "react"
import {
  Box,
  CardHeader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
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

  return <List sx={{}}>
          <ListItem>
            <ListItemIcon>
              <DeviceIcon needle={device.vendor}/>
            </ListItemIcon>
            <ListItemText 
              primary={<Font>{vendorStr}</Font>}
            />
            
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <DeviceIcon needle={os.name}/>
            </ListItemIcon>
            <ListItemText 
              primary={<Font>{osStr}</Font>}
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <DeviceIcon needle={browser.name}/>
            </ListItemIcon>
            <ListItemText 
              primary={<Font>{browserStr}</Font>}
            />
          </ListItem>
          
        </List>
}

/* 
<pre>ua: {JSON.stringify(ua, null, 2)}</pre>
*/
