import * as React from "react"
import {Box} from "@mui/material"

export type MovieClipShape = {
    mcId: string
    backgroundColor?: string
    defaultPosition?: string
    children?: React.ReactNode
    mcWidth?: number | string | null
    mcHeight?: number | string | null
    opacity?: number
    scale?: number
    top?: number
    left?: number
    zIndex?: number
    depth?: number
    bordered?: boolean
    hideOverflow?: boolean
}

export default function MovieClip(props: MovieClipShape) {
    const {
        mcId,
        mcWidth,
        mcHeight,
        opacity,
        scale,
        top,
        left,
        children,
        zIndex,
        bordered,
        hideOverflow,
        backgroundColor,
    } = props
    let bor = "none"
    let overflow = "auto"
    if (hideOverflow) overflow = "hidden"
    if (bordered) bor = "1px solid red"
    let z = zIndex
    let s = scale
    let w = mcWidth
    let h = mcHeight
    let o = opacity
    let t = top
    let l = left
    let bC = backgroundColor
    if(!bC) bC = "none"
    if(!o) o = 0
    if(!s) s = 1
    if (!w) w = "100vw"
    if (!h) h = "none"
    if (!z) z = 1000
    if (!t) t = 0
    if (!l) l = 0
    let divStyles = {
        position: 'absolute',
        backgroundColor: bC,
        border: bor,
        zIndex: z,
        width: w, 
        height: h,
        opacity: o,
        top: t,
        left: l,
        scale: s,
    }
    return (
        <Box id={mcId} sx={divStyles}>
            {children}
        </Box>
    )
}
