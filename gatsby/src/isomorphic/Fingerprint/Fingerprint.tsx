import React from "react"
import {
  usePwaDispatch,
  usePwaSelect,
  selectFingerprint,
} from "../../goldlabel"
import {
  addOutput,
  makeFirstFingerprint,
  reset,
  saveFingerprint,
} from "../Fingerprint"

export function Fingerprint() {
  const dispatch = usePwaDispatch()
  const fingerprint = usePwaSelect(selectFingerprint)
  const {
    making,
    made,
    saving,
    saved,
    firstFingerprint,
    subscribed,
  } = fingerprint
  
  React.useEffect(() => {
    dispatch(reset())
    if (!firstFingerprint && !making && !made) {
      dispatch (makeFirstFingerprint())
    } 
    if (firstFingerprint){
      if (!subscribed){
        const {uid} = firstFingerprint
        if (!saved) {
          // dispatch(saveFingerprint(uid))
        }
        console.log("subscribe", uid)
      }
    }
      
  }, [dispatch, firstFingerprint, making, made, saved, saving])
  
  return null
}
