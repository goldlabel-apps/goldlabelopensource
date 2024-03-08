import * as React from "react"
import {
    Box, 
    Tooltip,
    IconButton,
    Button,
} from "@mui/material"
import {
    Icon,
    Font,
    usePwaDispatch,
    resetLocalstorage,
    usePwaSelect,
    selectTings,
} from "../../../goldlabel"

export default function ResetBtn() {
    const dispatch = usePwaDispatch()
    const tings = usePwaSelect(selectTings)
    const {ting} = tings
    // const {fingerprint} = ting
    
    const onReset = () => {
        dispatch(resetLocalstorage(ting))
    }

    const mode = "icon"
    
    if (mode === "icon") return <>
        <Tooltip title={<Font color="white">Sure?</Font>}>
            <IconButton
                onClick={onReset}
                color="primary">
                <Icon icon="delete" />
            </IconButton>
        </Tooltip>
    </>

    return <Box sx={{ml: 1}}>
            <Tooltip title={<Font color="white">Sure?</Font>}>
                <Button
                    color="secondary"
                    variant="text"
                    onClick={onReset}>
                    <Box sx={{mr:1, mt: 0.25}}>
                        <Font variant="small">
                            Forget me
                        </Font>
                    </Box>
                    <Icon icon="delete" color="primary" />
                </Button>
            </Tooltip>
        </Box>
}
