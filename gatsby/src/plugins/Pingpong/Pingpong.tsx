import React from "react"
import {
  Box,
  CardHeader,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Badge,
} from "@mui/material"
import {
  Icon,
  Font,
  usePwaDispatch,
  usePwaSelect,
  selectPingpong,
  selectDisplay,
  selectAuth,
} from "../../core"
import {
  saveHost,
  makeFingerprint,
  fetchIPGeo,
  saveUid,
  sortPing,
  setPingpongKey,
  PingpongIconMenu,
} from "../Pingpong"
import {
  GeolocatorMap,
} from "../Geolocator"

export default function Pingpong() {
  
  const dispatch = usePwaDispatch()
  const auth = usePwaSelect(selectAuth)
  const pingpong = usePwaSelect(selectPingpong)
  const display = usePwaSelect(selectDisplay)
  const {myPing, myPingOpen, unread} = pingpong
  let messages = 0
  let lng, lat, city, province, countryName, continent, ip, flag = ""
  if (myPing){
    ip = myPing.ip
    continent = myPing.continent
    countryName = myPing.countryName
    province = myPing.province
    city = myPing.city
    lat = myPing.lat
    lng = myPing.lng
    flag = myPing.flag
  }
  let user: any = null
  if(auth) user = auth.user
  if (unread) messages = unread
  let isBig = false
  if (display) isBig = !display.mobile
  
  const openMyPing = () =>{
    dispatch(setPingpongKey("myPingOpen", true))
    return true
  }

  const closeMyPing = () =>{
    dispatch(setPingpongKey("myPingOpen", false))
    return true
  }

  React.useEffect(() => {
    const {
      uid,
      host, 
      fingerprint,
      ipGeo,
      ip,
      ipGeoFetching,
    } = pingpong
    if (!fingerprint) dispatch(makeFingerprint())
    if (!host) dispatch(saveHost())
    if (!ipGeo && !ipGeoFetching) dispatch(fetchIPGeo())
    if (!uid && host && fingerprint && ip ){
      dispatch(saveUid(host, ip, fingerprint))
    }
    if(uid) dispatch(sortPing(uid))
  }, [pingpong, dispatch])
  
  return <>
            <IconButton
              onClick={openMyPing}>
              <Badge badgeContent={messages} color="secondary">
                <Icon icon="pingpong" />
              </Badge>
            </IconButton>

            <Dialog 
              open={myPingOpen}
              fullWidth
              maxWidth={"xs"}
              fullScreen={!isBig}
              onClose={closeMyPing}>
                <DialogTitle>
                  <CardHeader 
                  title={<Font variant="title">
                            Ping
                        </Font>}
                    avatar={<Badge badgeContent={messages} color="secondary">
                            <Icon icon="pingpong" />
                            </Badge>}
                    action={<IconButton
                      sx={{m:1}}
                      onClick={closeMyPing}
                    >
                      <Icon icon={"close"} color="primary"/>
                    </IconButton>}
                  />
                </DialogTitle>
                <DialogContent sx={{mx:2}}>

                  <GeolocatorMap options={{
                    flag,
                    lat,
                    lng,
                  }}/>

                  <Box sx={{mt:2}}>
                    <Font>
                      IP {ip}
                    </Font>
                    <Font>
                      {city}, {province}, {countryName}
                    </Font>
                  </Box>
                </DialogContent>
                
                <DialogActions>
                  <PingpongIconMenu />
                </DialogActions>
              </Dialog>
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