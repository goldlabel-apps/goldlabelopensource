import React from "react"
import {
  usePwaDispatch,
  usePwaSelect,
  selectTings,
} from "../../goldlabel"
import {
  startTing, 
  dbFingerprint,
} from "../Tings"

export function Tings() {
  const dispatch = usePwaDispatch()
  const tings = usePwaSelect(selectTings)
  React.useEffect(() => {
    if (!tings){ 
      dispatch(startTing())
    }
    dispatch (dbFingerprint())
  }, [tings, dispatch])
  
  return null
}
