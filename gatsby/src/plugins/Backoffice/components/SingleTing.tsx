import React, { useEffect } from "react"
import moment from "moment"
import {
  AppBar,
  Toolbar,
  CardContent,
  Grid,
  CardHeader,
  CardActions,
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
  deleteTing,
} from "../../Backoffice"

const SingleTing = () => {
  const dispatch = usePwaDispatch()
  const backoffice = usePwaSelect(selectBackoffice)
  const {uid, ting} = backoffice
  // console.log("SingleTing", ting )

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
    fbId,
    locationStr,
    timeZone,
    os,
    host,
    device,
    browser,
    currentPage,
    countryCode,
    updated,
    created,
  } = ting
  let lastSeen = updated
  if (!lastSeen) lastSeen = created

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
                    <IconButton>
                      <Icon icon="blokey" color="primary" />
                    </IconButton>
                  </>}
                  title={<Font variant="title">
                            Ting
                          </Font>}
                />
                </Toolbar>
            </AppBar>
          
          <Box sx={{mt:"80px", pb: "100px"}}>
            <Grid container spacing={1}>

              

              <Grid item xs={12} sm={6}>
              <CardHeader 
                  avatar={<IconButton
                            color="inherit"
                            onClick={() => {
                              dispatch(uidSelect(null))
                            }}>
                              
                            <Avatar sx={{}} src={`/svg/hosts/${hostSrc}`}/>
                          </IconButton>}
                  title={<Font variant="title">
                            {host}
                          </Font>}
                />
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
                
                  
              </Grid>
              <Grid item xs={12} sm={6}>
                
                
                <CardContent>
                  <Font>{device} {browser} {os}</Font>
                  <Font variant="small">
                    Last Seen {moment(lastSeen).fromNow()}
                  </Font>  
                </CardContent>

                <CardHeader 
                  avatar={<Avatar sx={{width: 32, height: 32}} src={`/svg/flags/${countryCode || "none"}.svg`} />}
                  title={<Font>
                          {locationStr}
                        </Font>}
                  subheader={<Font>
                              {timeZone}
                            </Font>}/>
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
