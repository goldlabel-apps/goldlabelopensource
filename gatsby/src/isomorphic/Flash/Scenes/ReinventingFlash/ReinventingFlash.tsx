import React from "react"
import {
  usePwaDispatch,
} from "../../../../goldlabel"
import {
  Stage,
  MovieClip,
  Macromedia,
} from "../../../Flash"
import {reinventingFlashAS} from "./"

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
          >
            
            <MovieClip
              mcId="macromedia"
              opacity={1}
              zIndex={50}
              mcWidth={100}
              mcHeight={100}>
              <Macromedia color="white" />
            </MovieClip>  

          </Stage>
        </>
}
