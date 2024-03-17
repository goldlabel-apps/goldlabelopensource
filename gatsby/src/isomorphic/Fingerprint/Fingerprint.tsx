import React from "react"
import {
  usePwaDispatch,
  usePwaSelect,
} from "../../goldlabel"
import {
  // YourFingerprint,
  // ToggleBar,
  // init,
  // saveTing,
} from "./"

export function Fingerprint() {
  const dispatch = usePwaDispatch()

  React.useEffect(() => {
  }, [dispatch])
  
  return <>
          {/* <YourFingerprint />
          <ToggleBar /> */}
        </>
}
