import React from "react"
import {
  usePwaDispatch,
} from "../../../../goldlabel"

import {Stage} from "../../../Flash"
import {reinventingFlashAS} from "./reinventingFlashAS"

export function ReinventingFlash() {
  
  const dispatch = usePwaDispatch()

  React.useEffect(() => {
    reinventingFlashAS("SETUP")
  }, [dispatch])

  return <>
          <Stage 
            id="reinventingFlashStage"
            height={300}
            backgroundColor={"#F2F2F2"}
            hideOverflow={false}
          >
            Reinventing Flash Stage
          </Stage>
        </>
}
