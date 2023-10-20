import React from "react"
import {
  usePwaDispatch,
  usePwaSelect,
  selectTings,
  startTing,
  checkTing,
} from "../../../core"

export default function Tings() {
  const dispatch = usePwaDispatch()
  const tings = usePwaSelect(selectTings)

  React.useEffect(() => {
    if (!tings) dispatch(startTing())
    if (tings){
      const {uid} = tings
      if (uid) dispatch(checkTing())
    }
  }, [tings, dispatch])
  return null
}

