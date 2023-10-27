import {allHosts} from "../../allHosts"
import React, { useEffect } from "react"
import {
  Alert,
  Grid,
  Box,
  CardHeader,
  IconButton,
  AppBar,
  Toolbar,
} from "@mui/material"
import { 
  getFirestore,
  query,
  collection,
  onSnapshot,
} from "firebase/firestore"
import {
  Icon,
  Font,
  usePwaDispatch,
  usePwaSelect,
  MultiSelect,
  selectCore,
} from "../../../core"
import {
  SingleTing,
  TingListItem,
  selectBackoffice,
  setBackofficeKey,
} from "../../Backoffice"

const ViewTings = () => {
  const dispatch = usePwaDispatch()
  const core = usePwaSelect(selectCore)
  const backoffice = usePwaSelect(selectBackoffice)
  const {tings, uid} = backoffice
  const coreTings = core.tings
  let currentHost:any = null
  let currentUid = null
  if (coreTings) {
    currentHost = coreTings.host
    currentUid = coreTings.uid
  }
  
  useEffect(() => {
    const db = getFirestore()
    const q = query(collection(db, "tings"))
    const unsubscribe = onSnapshot(q, (s) => {
        const tings: any = []
        s.forEach((doc) => {
          const {created, updated} = doc.data()
          let lastSeen = updated
          if (!lastSeen) lastSeen = created
          tings.push({
            ...doc.data(),
            lastSeen,
          })
        })
        const sortedTings = [...tings].sort((a, b) => b.lastSeen - a.lastSeen)
        dispatch(setBackofficeKey("tings", sortedTings))
      })
    return () => {
      unsubscribe()
    }
  }, [dispatch])

  if (uid) return <SingleTing />
  if (!tings) return null
  let filteredTings: any = []
  for (let i = 0; i < tings.length; i++){
    // remove ourself?  && tings[i].uid !== currentUid
    if(tings[i].host === currentHost){
      filteredTings.push(tings[i])
    }
  }

  return <>
          <AppBar color="inherit" sx={{boxShadow:0}}>
            <Toolbar>
              <Box sx={{flexGrow:1}} />
              <Box sx={{m:1}}>
                <Font>
                    {currentHost}
                </Font>
              </Box>  
            </Toolbar>
          </AppBar>
          <Box sx={{my:"80px"}}>
            <Grid container spacing={1}>
              {filteredTings ? <>
                {!filteredTings.length ? <Grid item xs={12}>
                                          <Alert sx={{mt:1}}>
                                            No Tings Found
                                          </Alert>
                                        </Grid> : <>
                {filteredTings.map((ting: any, i: number) => {
                  return <Grid key={`ting_${i}`} item xs={12} md={6} >
                          <TingListItem ting={ting}/>
                        </Grid>
                })}
              </>}
              </> : null }
              
            </Grid>
          </Box>
  </>
}

export default ViewTings
