import React from "react";
import {
    DT9,
} from "../../";
import {
    useTheme,
} from "@mui/material";

export const getSizes = (divId: string, stageClip: string ) => {
    try {
        // console.log("getSizes", divId)
        const stage = getElement(stageClip);
        if (!stage) {
            // console.warn("No stage", stageClip);
            return false
        }
        const el = getElement(divId)
        if (!el) {
            // console.warn('No element called', divId)
            return false
        }
        return {
            stageW: stage.width,
            stageH: stage.height,
            elW: el.width,
            elH: el.height,
        }
    } catch (error) {
        return false
    }
}

export const getElement = (divId) => {
    try {
        const el = document.getElementById(divId)
        if (!el) return false

        let mode = 'square'
        let isMobile = false
        if (el.offsetWidth < 650) isMobile = true
        if (el.offsetHeight < el.offsetWidth) mode = 'landscape'
        if (el.offsetHeight > el.offsetWidth) mode = 'portrait'

        return {
            id: `#${divId}`,
            height: el.offsetHeight,
            width: el.offsetWidth,
            mode,
            isMobile,
        }
    } catch (error) {
        return false
    }
}



export const getClip = (clip: string) => {
    const theme = useTheme();
    const secondaryColor = theme.palette.secondary.main;
    switch (clip) {
        case 'DT9':
            return <DT9 color={secondaryColor}/>
        default:
            return null
    }
}