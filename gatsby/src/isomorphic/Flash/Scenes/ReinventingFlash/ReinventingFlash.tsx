import React from "react"
import {
    CardMedia,
} from "@mui/material"
import {
  usePwaSelect,
  usePwaDispatch,
  selectPWA,
} from "../../../../"
import {
  Stage,
  MovieClip,
  Background,
  Macromedia,
  setFlashSize,
} from "../../../Flash"
import {reinventingFlashAS} from "./reinventingFlashAS"

export function ReinventingFlash() {
  const dispatch = usePwaDispatch()
  const pwa = usePwaSelect(selectPWA)
  const {flash} = pwa
  const defaultWidth = 320
  const defaultHeight = 225
  let width: any = defaultWidth
  let height: any = defaultHeight
  if (flash){
    width = flash.width
    height = flash.height
  }

  React.useEffect(() => {
    //@ts-ignore
    const {setup} = flash 
    if(!setup) reinventingFlashAS("SETUP")
    let widthRuler: number = defaultWidth
    let heightRuler: number = defaultHeight
    const el = document.getElementById("widthRuler")
    if (el) widthRuler = el.clientWidth
    if (width !== widthRuler){
      dispatch(setFlashSize(widthRuler, heightRuler))
    }
  }, [flash, width, height, dispatch])

  return (<Stage 
            stage={"reinventingFlashStage"}
            width={width}
            height={height}>

            <MovieClip
              mcId="flashLogo"
              opacity={1}
              zIndex={50}
              width={100}
              height={100}>
              <Macromedia color="white" />
            </MovieClip>  

            <MovieClip
              mcId="background"
              opacity={0}
              zIndex={10}
              width={width}
              height={height}>
              <CardMedia
                component={"img"}
                height={height}
                src="/svg/featured/team.svg"
              />
            </MovieClip>  

            <MovieClip
              mcId="redux"
              opacity={1}
              zIndex={10}
              width={width}
              height={height}>
              <pre>{JSON.stringify(flash, null, 2)}</pre>
            </MovieClip>  



          </Stage>);
};
