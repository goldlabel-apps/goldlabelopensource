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

export default function ResetBtn(props: any) {
    let iconMode = "icon"
    const {mode} = props
    if (mode) iconMode = mode
    const dispatch = usePwaDispatch()
    const tings = usePwaSelect(selectTings)
    const {ting} = tings
    // const {fingerprint} = ting
    
    const onReset = () => {
        dispatch(resetLocalstorage(ting))
    }

    
    if (iconMode === "icon") return <>
        <Tooltip title={<Font color="white">
                            Forget Me
                        </Font>}>
            <IconButton
                onClick={onReset}
                color="primary">
                <Icon icon="delete" />
            </IconButton>
        </Tooltip>
    </>

    return <Box sx={{my: 2}}>
            <Tooltip title={<Font color="white">Sure?</Font>}>
                <Button
                    // fullWidth
                    color="inherit"
                    variant="outlined"
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
