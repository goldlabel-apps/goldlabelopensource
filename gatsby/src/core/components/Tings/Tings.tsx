import React from "react"
import {
  usePwaDispatch,
  usePwaSelect,
  selectTings,
  startTing,
  checkTing,
  resetTing,
} from "../../../core"

export default function Tings() {
  const dispatch = usePwaDispatch()
  const tings = usePwaSelect(selectTings)
  let tingTime = 0
  if (tings) tingTime = tings.tingTime

  React.useEffect(() => {
    if ((Date.now() - tingTime)/1000 > 10) dispatch(resetTing())
    if (!tings) dispatch(startTing())
    if (tings){
      const {uid} = tings
      if (uid) dispatch(checkTing())
    }
  }, [tings, dispatch])
  return null
}
