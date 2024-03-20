import React from "react"
import {
  usePwaDispatch,
  usePwaSelect,
  selectFingerprint,
} from "../../goldlabel"
import {
  make,
  // check,
} from "../Fingerprint"

export function Fingerprint() {
  const dispatch = usePwaDispatch()
  const fingerprint = usePwaSelect(selectFingerprint)
  const {
    firstFingerprint,
    making,
    made,
  } = fingerprint
  
  let uid = ""
  if (firstFingerprint) uid = firstFingerprint.uid
  
  React.useEffect(() => {
    if (!making && !made) {
      dispatch (make())
    }
    if (uid !== ""){
      console.log("save")
    }
  }, [
    uid,
    dispatch,
    making, 
    made, 
  ])
  
  return null
}
