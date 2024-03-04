import React from "react"
import {
  useTheme,
} from "@mui/material"
import {
  usePwaDispatch,
  usePwaSelect,
  selectCore,
  selectTings,
} from "../../../goldlabel"
import {
  FullScreen,
  ToggleBar,
  toggleFullScreen,
  init,
  setTingsKey,
} from "./"

export function Tings() {
  const dispatch = usePwaDispatch()
  const tings = usePwaSelect(selectTings)

  React.useEffect(() => {
    const {
      initted,
      initting,
      subscribed,
    } = tings
    if (!initted && !initting) dispatch(init())
    if (subscribed) dispatch(setTingsKey("subscribed", false))
  }, [tings, dispatch])

  return <>
          <ToggleBar />
          <FullScreen />
        </>
}
