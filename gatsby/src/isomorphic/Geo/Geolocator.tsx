import React from "react"
import {
    Dialog,
  } from "@mui/material"
import {
    useIsBig,
    usePwaSelect,
    usePwaDispatch,
    selectGeolocator,
} from "../../goldlabel"
import {
    FlashMap,
    toggleBigMap,
} from "../Geolocator"

export default function Geolocator() {
    const dispatch = usePwaDispatch()
    const {isBig} = useIsBig()
    const geo = usePwaSelect(selectGeolocator)
    if (!geo) return null
    const {bigMapOpen} = geo

    return <>
        <Dialog 
            open={bigMapOpen}
            fullWidth
            fullScreen={!isBig}
            onClose={() => {
                dispatch(toggleBigMap(false))
            }}>
            <FlashMap />
        </Dialog>
    </>
}

/*
<pre>bigMapOpen: {JSON.stringify(bigMapOpen, null, 2)}</pre>
const backoffice = usePwaSelect(selectBackoffice)
if(backoffice) console.log("geo", geo)
*/
    