import React from "react"
import {
  usePwaDispatch,
  usePwaSelect,
  selectPingpong,
} from "../../core"
import {
  saveHost,
  makeFingerprint,
  fetchIPGeo,
  saveUid,
  sortPing,
} from "../Pingpong"

export default function Pingpong() {
  const dispatch = usePwaDispatch()
  const pingpong = usePwaSelect(selectPingpong)
  const {lastSaved} = pingpong
  
  React.useEffect(() => {
    const {
      uid,
      lastSaved,
      host, 
      fingerprint,
      ipGeo,
      ip,
      ipGeoFetching,
    } = pingpong
    // if (Date.now()-lastSaved > 2000) dispatch(resetPingpong())
    if (!fingerprint) dispatch(makeFingerprint())
    if (!host) dispatch(saveHost())
    if (!ipGeo && !ipGeoFetching) dispatch(fetchIPGeo())
    if (!uid && host && fingerprint && ip ){
      dispatch(saveUid(host, ip, fingerprint))
    }
    if(uid) dispatch(sortPing(uid))
  }, [pingpong, dispatch])

  // return <>
  //         last saved {Date.now() - lastSaved}
  //         <pre>lastSaved: {JSON.stringify(lastSaved, null, 2)}</pre>  
  //       </>
  return null
}
