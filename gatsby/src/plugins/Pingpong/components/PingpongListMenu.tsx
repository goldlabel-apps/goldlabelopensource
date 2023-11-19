import React from "react"
import {
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material"
import {
  Icon,
  Font,
  usePwaDispatch,
} from "../../../core"

export default function PingpongListMenu() {
  const dispatch = usePwaDispatch()
  return <>
            <List>
            
            <ListItemButton
                sx={{mb:1}}
                color="primary"
                onClick={() => {
                    console.log("reset redux")
                }}>
                <ListItemIcon>
                <Icon icon={"reset"} color="primary"/>
                </ListItemIcon>
                <ListItemText
                primary={<Font>
                            Refresh
                            </Font> }/>
                </ListItemButton>
            
            <ListItemButton
                sx={{mb:1}}
                color="primary"
                onClick={() => {
                    console.log("close")
                }}>
                <ListItemIcon>
                <Icon icon={"close"} color="primary"/>
                </ListItemIcon>
                <ListItemText
                primary={<Font>
                            Close
                            </Font> }/>
                </ListItemButton>
            </List>

        </>
}


/*
  myPing: {
  "uid": "localhost:8000_98.159.226.228_ddb391759690426bcf0fa811b687b78d",
  "host": "localhost:8000",
  "ip": "98.159.226.228",
  "href": "http://localhost:8000/wordpress/",
  "slug": "/wordpress/",
  "title": "WordPress A faster, better alternative to WordPress",
  "fingerprint": "ddb391759690426bcf0fa811b687b78d",
  "browser": "Chrome",
  "browserVs": "119.0.0.0",
  "deviceModel": "Macintosh",
  "deviceVendor": "Apple",
  "os": "Mac OS",
  "osVs": "10.15.7",
  "lng": "19.26388",
  "lat": "42.43545",
  "flag": "me",
  "continent": "Europe",
  "countryName": "Montenegro",
  "province": "Podgorica Municipality",
  "district": "",
  "city": "Podgorica",
  "languages": "sr,hu,bs,sq,hr,rom",
  "countryNameFull": "Montenegro",
  "countryCapital": "Podgorica",
  "timeZone": "Europe/Podgorica",
  "diallingCode": "+382",
  "is_eu": false
}
{continent || ""}
{countryName || ""}
{province || ""}
{city || ""}

<pre>myPing: {JSON.stringify(myPing, null, 2)}</pre>  

*/