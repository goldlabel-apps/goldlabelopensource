import * as React from "react"
import { 
  getFirestore,
  onSnapshot,
  doc,
} from "firebase/firestore"
import {
  Avatar,
  Box,
  CardContent,
  CardHeader,
  IconButton,
} from "@mui/material"
import {
  Icon,
  Font,
  usePwaDispatch,
  usePwaSelect,
  selectBackoffice,
  selectCore,
} from "../../../core"
import {
  setBackofficeKey,
  deleteFbId,
  updateFbId,
} from "../../Backoffice"
import {iconFromHost} from "../utils"

export default function Ping() {
  const dispatch = usePwaDispatch()

  React.useEffect(() => {
    const db = getFirestore()
    const unsubscribe = onSnapshot(doc(db, "pingpong", fbId), (doc) => {
      dispatch(setBackofficeKey("ping", doc.data()))
  })
    return () => unsubscribe()
  }, [dispatch])

  const backoffice = usePwaSelect(selectBackoffice)
  const core = usePwaSelect(selectCore)
  const {allHosts} = core
  const {
    fbId,
    ping,
  } = backoffice
  if (!ping) return null
  const {
    title,
    host,
    flag,
  } = ping

  return <>
          <CardHeader 
            title={<Font variant="title">
                      {title}
                    </Font>}
            avatar={<>
              <Box sx={{display: "flex"}}>
              <IconButton
                color="primary"
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault()
                  dispatch(updateFbId(null))
                }}
              >
                <Icon icon="left" />
              </IconButton>
                <Avatar 
                  sx={{width: "32px", height: "32px", mt:0.5}} 
                  src={`/svg/flags/${flag}.svg`} 
                />
                <Avatar 
                  // sx={{width: "28px", height: "28px", }} 
                  src={iconFromHost(host, allHosts)} />
              </Box>
            </>}
            action={<>
              <IconButton
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault()
                  dispatch(deleteFbId("pingpong", fbId))
                }}>
                <Icon icon="delete" />
              </IconButton>
            </>}
          />
          {/* <CardContent>
            <pre>ping: {JSON.stringify(ping, null, 2)}</pre>
          </CardContent> */}
        </>
}

/* 
*/
