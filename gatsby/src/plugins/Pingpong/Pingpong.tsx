import React from "react"
import {
  usePwaDispatch,
  usePwaSelect,
  selectPingpong,
} from "../../core"
import {
  saveHost,
  makeFingerprint,
  setPingpongKey,
  fetchIPGeo,
  saveUid,
  restfulPing,
} from "../Pingpong"

export default function Pingpong() {
  const dispatch = usePwaDispatch()
  const pingpong = usePwaSelect(selectPingpong)

  React.useEffect(() => {
    const {
      uid,
      created,
      host, 
      fingerprint,
      ipGeo,
      ip,
      ipGeoFetching,
      pinged,
      pinging,
    } = pingpong
    if (created === 0) dispatch(setPingpongKey("created", Date.now()))
    if (!fingerprint) dispatch(makeFingerprint())
    if (!host) dispatch(saveHost())
    if (!ipGeo && !ipGeoFetching) dispatch(fetchIPGeo())
    if (!uid && host && fingerprint && ip ){
      dispatch(saveUid(host, ip, fingerprint))
      if (!pinged && !pinging) dispatch(restfulPing())
    }
  }, [pingpong, dispatch])

  return null
}
