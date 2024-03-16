import React from "react"
import {
  usePwaDispatch,
  usePwaSelect,
  selectTings,
} from "../../goldlabel"
import {
  YourFingerprint,
  ToggleBar,
  // init,
  // saveTing,
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
      initDone,
      ting,
    } = tings
    // if (!initted && !initDone) dispatch(init())
    // if (ting){
    //   const {ip} = ting
    //   if (ip) dispatch(saveTing())
    // }
  }, [tings, dispatch])
  
  return <>
          <YourFingerprint />
          <ToggleBar />
        </>
}
