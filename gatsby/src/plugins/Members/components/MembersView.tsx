import * as React from "react"
import { 
  getFirestore,
  query,
  collection,
  onSnapshot,
} from "firebase/firestore"
import {
  Box,
  Card,
  CardHeader,
  IconButton,
  ListItemButton,
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
} from "../../Backoffice"
import {
  MemberForm,
} from "../../Members"

type MemberShape = {
  fbId: string
}

export default function MembersView() {
  const dispatch = usePwaDispatch()
  const backoffice = usePwaSelect(selectBackoffice)
  const {
    members, 
    newDoc,
  } = backoffice
  // console.log("newDoc", newDoc)

  React.useEffect(() => {
    const db = getFirestore()
    const q = query(collection(db, "members"))
    const unsubscribe = onSnapshot(q, (s) => {
        const tings: any = []
        s.forEach((doc) => {
          const {updated, created} = doc.data()
          let lastUpdated = updated
          if (!lastUpdated) lastUpdated = created
          tings.push({
            fbId: doc.id,
            ...doc.data(),
            lastUpdated,
          })
        })
        const sortedTings = [...tings].sort((a, b) => b.lastUpdated - a.lastUpdated)
        dispatch(setBackofficeKey("members", sortedTings))
      })
    return () => {
      unsubscribe()
    }
  }, [dispatch])

  return <>
          <CardHeader 
            sx={{mt:3}}
            avatar={<>
              <IconButton 
                sx={{ml:-2}}
                color="primary"
                aria-label="deslect collection"
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault()
                  dispatch(setBackofficeKey("collection", null))
                }}>
                <Icon icon="left" />
              </IconButton>
              <Box sx={{mt:1}}>
                <Icon icon="members" color="primary" />
              </Box>
            </>}
            title={<Font variant="title">Members</Font>}
          />


          <Card sx={{mb:3}}>
            <MemberForm />
          </Card>

          <pre>newDoc: {JSON.stringify(newDoc, null, 2)}</pre> 
          {/* {members ? <>
            {members.map((member: MemberShape, i: number) => {
              const {fbId} = member 
              return <ListItemButton
                      key={`member_${i}`}
                      onClick={()=>{}}>
                      <Font>{fbId}</Font>
                    </ListItemButton>
            })}
          </> : null } */}
        </>
}

/* 
  <pre>backoffice: {JSON.stringify(backoffice, null, 2)}</pre> 
*/
