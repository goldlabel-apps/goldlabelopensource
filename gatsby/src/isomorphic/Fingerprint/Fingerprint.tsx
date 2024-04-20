import React from "react"
import {
  Icon,
  usePwaSelect,
  usePwaDispatch,
  selectFingerprint,
  selectBooted,
  selectBootTime,
} from "../../goldlabel"
import {
  check,
  make,
  Visitor,
} from "../Fingerprint"

export default function Fingerprint() {
   
  const dispatch = usePwaDispatch()
  const fp = usePwaSelect(selectFingerprint)
  const booted = usePwaSelect(selectBooted)
  const bootTime = usePwaSelect(selectBootTime)
   
  React.useEffect(() => {
    const { 
      making, 
      made, 
      checking, 
      checked,
    } = fp
    if (!making && !made) {
      dispatch (make())
    } else {
      if (!checked && !checking && made) dispatch (check())
    }
    
  }, [dispatch, fp, booted, bootTime])
  
  const {
    mode,
    exists, 
  } = fp

  if (mode === "subscribe" && exists) return <Visitor />
  if (mode === "icon") return <Icon icon="ting"/>
  if (mode === "hidden") return null
  if (mode === "debug") return <pre>fp: {JSON.stringify(fp, null, 2)}</pre> 
  
  return null
}
