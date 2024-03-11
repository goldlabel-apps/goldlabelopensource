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
} from "../../../../goldlabel"
import {
    forgetTing,
} from "../"

export default function ForgetMe(props: any) {
    let iconMode = "default"
    const {mode} = props
    if (mode) iconMode = mode
    const dispatch = usePwaDispatch()
    const onReset = () => {
        let yehOK = window.confirm("Remove all trace of your visit?")
        if (yehOK) dispatch(forgetTing())
    }

    if (iconMode === "icon") return <>
        <Tooltip title={<Font color="white">
                            Forget Me
                        </Font>}>
            <IconButton
                onClick={onReset}
                color="primary">
                <Icon icon="forget" />
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
                    <Icon icon="forget" color="primary" />
                </Button>
            </Tooltip>
        </Box>
}
