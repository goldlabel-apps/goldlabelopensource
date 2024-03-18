import React from "react"
import {
  usePwaDispatch,
  usePwaSelect,
  selectFingerprint,
} from "../../goldlabel"
import {
  addOutput,
  make,
  reset,
  save,
} from "../Fingerprint"

export function Fingerprint() {
  const dispatch = usePwaDispatch()
  const fingerprint = usePwaSelect(selectFingerprint)
  const {
    firstFingerprint,
    making,
    made,
    saving,
    saved,
    // subscribing,
    // subscribed,
  } = fingerprint
  
  React.useEffect(() => {
    // dispatch(reset())
    if (!making && !made) {
      dispatch (make())
    }
    if (!saving && !saved) {
      // dispatch (save())
      console.log("save")
      dispatch(addOutput("save"))
    }
    // if (firstFingerprint){
    //   if (!subscribed){
    //     const {uid} = firstFingerprint
    //     if (!saved) {
    //       // dispatch(saveFingerprint(uid))
    //     }
    //     console.log("subscribe", uid)
    //   }
    // }
      
  }, [dispatch, firstFingerprint, making, made, saved, saving])
  
  return null
}
