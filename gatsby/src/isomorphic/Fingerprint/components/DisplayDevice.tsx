import * as React from "react"
import {
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
    subscribed,
  } = fingerprint
  if (!subscribed) return null
  const {ua} = subscribed
  const {
    browser,
    engine,
    os,
    device,
  } = ua
  const vendorStr = `${device.vendor} ${device.model}`
  const osStr = `${os.name} ${os.version}`
  const browserStr = `${browser.name} ${browser.major} ${engine.name}`

  return <List dense sx={{}}>
          <ListItem>
            <ListItemIcon>
              <DeviceIcon needle={device.vendor}/>
            </ListItemIcon>
            <ListItemText 
              primary={<Font variant="small">{vendorStr}</Font>}
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <DeviceIcon needle={os.name}/>
            </ListItemIcon>
            <ListItemText 
              primary={<Font variant="small">{osStr}</Font>}
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <DeviceIcon needle={browser.name}/>
            </ListItemIcon>
            <ListItemText 
              primary={<Font variant="small">{browserStr}</Font>}
            />
          </ListItem>
        </List>
}

/* 
<pre>ua: {JSON.stringify(ua, null, 2)}</pre>
*/
