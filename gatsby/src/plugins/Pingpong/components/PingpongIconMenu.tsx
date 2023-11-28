import React from "react"
import {
  IconButton,
} from "@mui/material"
import {
  Icon,
  usePwaDispatch,
} from "../../../core"
import {
  setPingpongKey,
} from "../../Pingpong"

export default function PingpongIconMenu() {
  const dispatch = usePwaDispatch()
  return <>
          <IconButton
            sx={{}}
            color="primary"
            onClick={(e: React.MouseEvent) => {
              e.preventDefault()
              dispatch(setPingpongKey("pingFbId", null))
            }}>
              <Icon icon={"close"} color="primary"/>
          </IconButton>
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