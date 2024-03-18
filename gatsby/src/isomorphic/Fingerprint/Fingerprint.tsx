import React from "react"
import {
  usePwaDispatch,
  usePwaSelect,
  selectFingerprint,
} from "../../goldlabel"
import {
  addOutput,
  resetOutput,
  makeFirstFingerprint,
} from "../Fingerprint"

export function Fingerprint() {
  const dispatch = usePwaDispatch()
  const fingerprint = usePwaSelect(selectFingerprint)
  
  React.useEffect(() => {
    dispatch(resetOutput())
    dispatch(addOutput("Fingerprinting..."))
    const {
      making,
      made,
      checking,
      checked,
      firstFingerprint,
    } = fingerprint
    if (!firstFingerprint && !making && !made) {
      dispatch (makeFirstFingerprint())
    }
    if (firstFingerprint && !checked && !checking){
      const {uid} = firstFingerprint
      dispatch(addOutput(`checking <b>${uid}</b>`))
    }
    if (made && checked){
      console.log("setDoc")
    }
  }, [dispatch])

  return null
}
