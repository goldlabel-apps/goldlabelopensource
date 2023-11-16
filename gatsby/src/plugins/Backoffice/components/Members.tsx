import * as React from "react"
import { 
  getFirestore,
  query,
  collection,
  onSnapshot,
} from "firebase/firestore"
import {
  Box,
  CardHeader,
  IconButton,
} from "@mui/material"
import {
  Icon,
  Font,
  usePwaDispatch,
  usePwaSelect,
  selectBackoffice,
} from "../../../core"
import {
  setBackofficeKey,
  Pings,
} from "../../Backoffice"

export default function Members() {
  const dispatch = usePwaDispatch()
  const backoffice = usePwaSelect(selectBackoffice)
  const {
    pingpong,
  } = backoffice
  
  // React.useEffect(() => {
  //   const db = getFirestore()
  //   const q = query(collection(db, "pingpong"))
  //   const unsubscribe = onSnapshot(q, (s) => {
  //       const pings: any = []
  //       s.forEach((doc) => {
  //         const {updated, created} = doc.data()
  //         let lastUpdated = updated
  //         if (!lastUpdated) lastUpdated = created
  //         pings.push({
  //           fbId: doc.id,
  //           ...doc.data(),
  //           lastUpdated,
  //         })
  //       })
  //       const sortedTings = [...pings].sort((a, b) => b.lastUpdated - a.lastUpdated)
  //       dispatch(setBackofficeKey("pingpong", sortedTings))
  //     })
  //   return () => {
  //     unsubscribe()
  //   }
  // }, [dispatch])

  return <>
          <CardHeader 
            title={<Font variant="title">
                      Members
                    </Font>}
            avatar={<>              
              <Box sx={{mt:1}}>
                <Icon icon="members" color="primary" />
              </Box>
            </>}
            
          />
          
        </>
}

/* 
    <pre>pingpong: {JSON.stringify(pingpong, null, 2)}</pre>
*/
