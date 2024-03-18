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
    } else{
      if (firstFingerprint){
        const {uid} = firstFingerprint
        // if (made && !saved) {
        //   dispatch(saveFingerprint(uid))
        // }
        
          console.log("subscribed", subscribed)
        
      }
    }
  }, [dispatch, firstFingerprint, making, made, saved, saving])
  
  return null
}
