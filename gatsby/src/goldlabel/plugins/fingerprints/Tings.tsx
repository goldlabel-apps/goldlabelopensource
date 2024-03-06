import React from "react"
import {
  usePwaDispatch,
  usePwaSelect,
  selectTings,
} from "../../../goldlabel"
import {
  FullScreen,
  ToggleBar,
  init,
  saveTing,
} from "./"

export function Tings() {
  const dispatch = usePwaDispatch()
  const tings = usePwaSelect(selectTings)
  React.useEffect(() => {
    const {
      initted,
      initting,
      ting,
    } = tings
    if (!initted && !initting) dispatch(init())
    if (ting){
      const {ip} = ting
      if (ip && !initting){
        dispatch(saveTing(ting))
      }
    }
  }, [tings, dispatch])
  
  return <>
          <ToggleBar />
          <FullScreen />
        </>
}
