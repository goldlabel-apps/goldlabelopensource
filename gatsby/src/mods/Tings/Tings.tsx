import React from "react"
import {
  usePwaDispatch,
  usePwaSelect,
  selectTings,
} from "../../goldlabel"
import {
  startTing, 
  firebaseTing,
} from "../Tings"

export function Tings() {
  const dispatch = usePwaDispatch()
  const tings = usePwaSelect(selectTings)
  React.useEffect(() => {
    // const {finished} = tings
    if (!tings){ 
      dispatch(startTing())
    }
    dispatch (firebaseTing())
  }, [tings, dispatch])
  
  return null
  return <><pre>{JSON.stringify(tings, null, 2)}</pre></>
}
