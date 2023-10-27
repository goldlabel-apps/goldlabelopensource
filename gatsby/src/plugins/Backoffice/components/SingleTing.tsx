import React, { useEffect } from "react"
import moment from "moment"

import {
  AppBar,
  Toolbar,
  Grid,
  CardHeader,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  Avatar,
  Box,
} from "@mui/material"
import { 
  getFirestore,
  where,
  query,
  collection,
  onSnapshot,
} from "firebase/firestore"
import {
  Icon,
  Font,
  usePwaDispatch,
  usePwaSelect,
} from "../../../core"
import {
  selectBackoffice,
  setBackofficeKey,
  uidSelect,
  Device,
} from "../../Backoffice"

const SingleTing = () => {
  const dispatch = usePwaDispatch()
  const backoffice = usePwaSelect(selectBackoffice)
  const {uid, ting} = backoffice

  useEffect(() => {
    const db = getFirestore()
    const r = collection(db, "tings")
    const q = query(r, where("uid", "==", uid))
    const unsubscribe = onSnapshot(q, (snap) => {
      let ting: any = {}
      snap.forEach((doc) => {
        ting = {
          fbId: doc.id,
          ...doc.data(),
        }
      })
      dispatch(setBackofficeKey("ting", ting))
    })
    return () => {
      unsubscribe()
    }
  }, [dispatch])
  if (!ting) return null
  const {
    locationStr,
    timeZone,
    os,
    host,
    device,
    browser,
    currentPage,
    countryCode,
    countryName,
    updated,
    created,
    url,
  } = ting
  // console.log("ting", ting)
  let lastSeen = updated
  if (!lastSeen) lastSeen = created
  let title= ""
  if (currentPage) title = currentPage.title
  let hostSrc = "opensource.svg"
  if (host === "listingslab.com") hostSrc = "listingslab.svg"
  if (host === "legalweed.world") hostSrc = "legalweed.svg"
  if (host === "growspy.app") hostSrc = "growspy.svg"
  if (host === "divemalta.app") hostSrc = "divemalta.svg"
  if (host === "localhost:8000") hostSrc = "opensource.svg"
  if (host === "goldlabel-open-source.web.app") hostSrc = "opensource.svg"
  
  return <>
            <AppBar color="inherit" sx={{boxShadow:0}}>
              <Toolbar>
                <CardHeader 
                  avatar={<>
                    <IconButton
                      color="primary"
                      onClick={() => {
                        dispatch(uidSelect(null))
                      }}>
                      <Icon icon={"left"} />
                    </IconButton>
                    
                  </>}
                  title={<Font variant="title">
                            {title}
                          </Font>}
                  subheader={<Font variant="small">
                            Last seen {moment(lastSeen).fromNow()}
                          </Font>}
                />
                </Toolbar>
            </AppBar>
          
          <Box sx={{mt:"80px", pb: "100px"}}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <IconButton
                  color="inherit"
                  onClick={() => {
                    dispatch(uidSelect(null))
                  }}>
                  <Avatar sx={{
                    width: 32, 
                    height: 32,
                  }} src={`/svg/hosts/${hostSrc}`}/>
                </IconButton>
                <Device 
                  os={os}
                  browser={browser}
                  device={device}
                />
                <Box sx={{m:1}}>
                  <Font>
                    {url}
                  </Font>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{display: "flex"}}>
                  <Box sx={{my:2}}>
                  <Avatar sx={{
                    m:1,
                    width: 32, 
                    height: 32,
                  }} 
                  src={`/svg/flags/${countryCode || "none"}.svg`} />
                    
                  </Box>

                  <Box sx={{my:2}}>
                    <Font>
                      {timeZone}
                    </Font>
                    <Font>
                      {locationStr}
                    </Font>
                  </Box>
                  
                </Box>
              </Grid>
            </Grid>

            
            
            
            
            

            <Accordion sx={{boxShadow:0}}>
              <AccordionSummary expandIcon={<Icon icon="expand" color="primary"/>} />
              <AccordionDetails>
              <pre>ting: {JSON.stringify(ting, null, 2)}</pre>
              </AccordionDetails>
            </Accordion>
          </Box>
        
  </>
}

export default SingleTing

/* 
<CardActions sx={{my:1}}>       
  <IconButton
    color="primary"
    onClick={() => {
      dispatch(deleteTing(fbId))
    }}>
    <Icon icon={"delete"} />
  </IconButton>
  <IconButton
    color="primary"
    onClick={() => {
      // dispatch(deleteTing(fbId))
    }}>
    <Icon icon={"edit"} />
  </IconButton>
</CardActions> 
*/