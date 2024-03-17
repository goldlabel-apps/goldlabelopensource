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
} from "../../../goldlabel"

export default function Forget() {
    const dispatch = usePwaDispatch()
    const onForget = () => {
        let yehOK = window.confirm("All traces of your visit will be deleted. Thanks for useing our app")
        if (yehOK) dispatch(resetLocalstorage())
    }
    return <>
            <Tooltip title={<Font color="white">
                Forget
            </Font>}>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={onForget}>
                        <Box sx={{mt:0.25}}>
                            <Icon icon={"forget"} color="primary"/>
                        </Box>
                        <Box sx={{ml: 1, mt:0.5}}>
                            <Font variant="small">
                                Forget
                            </Font>
                        </Box>
                </Button>
            </Tooltip>
    </>
}
