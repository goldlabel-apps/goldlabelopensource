import React, { useEffect } from "react"
import { 
  getFirestore,
  query,
  collection,
  onSnapshot,
} from "firebase/firestore"
import {
  Grid,
  Box,
  CardHeader,
  AppBar,
  Toolbar,
} from "@mui/material"
import {
  Icon,
  Font,
  usePwaDispatch,
  usePwaSelect,
} from "../../../core"
import {
  SingleTing,
  TingListItem,
  selectBackoffice,
  setBackofficeKey,
} from "../../Backoffice"

const SubscribeTings = () => {
  const dispatch = usePwaDispatch()
  const backoffice = usePwaSelect(selectBackoffice)
  const {tings, uid} = backoffice
  
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

  return <>
          <AppBar color="inherit" sx={{boxShadow:0}}>
            <Toolbar>
              <CardHeader 
                avatar={<Icon icon="tings" color="primary" />}
                title={<Font variant="title">
                          Tings
                        </Font>}
              />
              </Toolbar>
          </AppBar>
          <Box sx={{my:"80px"}}>
            <Grid container spacing={1}>
              {tings ? <>
                {!tings.length ? <>Nothing found</> : <>
                {tings.map((item: any, i: number) => {
                  return <Grid key={`ting_${i}`} item xs={12} md={6} lg={4}>
                          <TingListItem ting={item}/>
                        </Grid>
                })}
              </>}
              </> : null }
              
            </Grid>
          </Box>
  </>
}

export default SubscribeTings
