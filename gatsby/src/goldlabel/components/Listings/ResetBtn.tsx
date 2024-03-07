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
    
    return <Box sx={{ml: 1}}>
            <Tooltip title={<Font color="white">
                Are you sure?
            </Font>}>
                <Button
                    color="primary"
                    onClick={onReset}
                >
                    <Box sx={{mr:1, mt: 0.25}}>
                        <Font variant="small">
                            Forget me
                        </Font>
                    </Box>
                    <Icon icon="delete" />
                </Button>
            </Tooltip>
            </Box>
}
