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
    usePwaSelect,
    selectTings,
} from "../../../goldlabel"

export default function ResetBtn() {
    const dispatch = usePwaDispatch()
    const tings = usePwaSelect(selectTings)
    const {ting} = tings
    console.log("ting", ting)
    const onReset = () => {
        dispatch(resetLocalstorage(ting))
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
