import React from "react"
import {
  Box,
  Badge,
  ButtonBase,
} from "@mui/material"
import {
  Icon,
  Font,
  usePwaDispatch,
  usePwaSelect,
  selectPingpong,
  selectDisplay,
  selectAuth,
  selectCore,
  setCoreKey,
} from "../../core"
import {
  saveHost,
  makeFingerprint,
  fetchIPGeo,
  saveUid,
  checkUid,
  newHit,
  saveDevice,
} from "../Pingpong"

export default function Pingpong() {  
  const dispatch = usePwaDispatch()
  const auth = usePwaSelect(selectAuth)
  const pingpong = usePwaSelect(selectPingpong)
  const display = usePwaSelect(selectDisplay)
  const core = usePwaSelect(selectCore)
  const {signinOpen} = core
  let label = "Sign in"
  let user = null
  if(auth) user = auth.user
  // @ts-ignore
  if (user) label = user.user.email
  let isBig = false
  let badgeContent = 0
  if (display) isBig = !display.mobile

  React.useEffect(() => {
    const {
      uid,
      host, 
      fingerprint,
      ipGeo,
      ip,
      ipGeoFetching,
      fbId,
      exists,
      device,
    } = pingpong
    
    if (!device) dispatch(saveDevice())
    if (!fingerprint) dispatch(makeFingerprint())
    if (!host) dispatch(saveHost())
    if (!ipGeo && !ipGeoFetching) dispatch(fetchIPGeo())
    if (!uid && host && fingerprint && ip ){
      dispatch(saveUid(host, ip, fingerprint))
    }
    if (uid && !fbId && !exists) dispatch(checkUid(uid))
    if (exists) {
      dispatch(newHit(fbId))
    }
  }, [pingpong, dispatch])

  const onBtnClick = () => {
    if (!user) dispatch(setCoreKey("signinOpen", true))
    if (user) dispatch(setCoreKey("accountDialogOpen", true))
    return true
  }
  
  return <>          
          <ButtonBase
            sx={{mt:1.5, p:1, borderRadius: 1}}
            onClick = {(e: React.MouseEvent) => {
              e.preventDefault()
              onBtnClick()
            }}>
            <Box sx={{mr:1.5, mt: 0.25}}>
              <Font variant="small">{label}</Font>
            </Box>
            <Badge badgeContent={badgeContent} color="default">
              <Icon icon="backoffice" color="primary" />
            </Badge>
          </ButtonBase>
        </>
}

