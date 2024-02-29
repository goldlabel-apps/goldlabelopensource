import * as React from "react"
import {
    Box, 
    Tooltip,
    IconButton,
} from "@mui/material"
import {
    Icon,
    Font,
    usePwaDispatch,
    resetLocalstorage,
} from "../../../goldlabel"


export default function ResetBtn() {
    const dispatch = usePwaDispatch()
    const onReset = () => {
        dispatch(resetLocalstorage())
    }

    return <Box sx={{mt: -0.5}}>
            <Tooltip title={<Font color="white">
                Reset
            </Font>}>
                <IconButton
                    color="primary"
                    onClick={onReset}
                >
                <Icon icon="reset" />
                </IconButton>
            </Tooltip>
            </Box>
}
