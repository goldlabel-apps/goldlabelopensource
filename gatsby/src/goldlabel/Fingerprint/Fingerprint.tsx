import React from "react"
import {
  usePwaDispatch,
  usePwaSelect,
  selectTings,
} from "../../goldlabel"
import {
  YourFingerprint,
  ToggleBar,
  init,
  saveTing,
} from "./"

export function Fingerprint() {
  const dispatch = usePwaDispatch()
  const tings = usePwaSelect(selectTings)
  const {
    ting,
  } = tings

  React.useEffect(() => {
    const {
      initted,
      initting,
      ting,
    } = tings
    if (!initted && !initting) dispatch(init())
    if (ting){
      const {ip} = ting
      if (ip) dispatch(saveTing())
    }
  }, [tings, dispatch])
  
  return <>
          <YourFingerprint />
          <ToggleBar />
        </>
}
