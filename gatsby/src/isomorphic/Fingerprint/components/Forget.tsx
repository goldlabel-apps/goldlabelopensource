import * as React from "react"
import {
    Box, 
    Tooltip,
    Button,
} from "@mui/material"
import {
    Icon,
    Font,
    usePwaDispatch,
    resetLocalstorage,
} from "../../../goldlabel"
import {remove} from "../../Fingerprint"

export default function Forget() {
    const dispatch = usePwaDispatch()
    const onForget = () => {
        let yehOK = window.confirm("All traces of your visit will be deleted. Thanks for useing our app")
        if (yehOK) dispatch(remove())
    }
    return <>
            <Tooltip title={<Font color="white">
                Delete all traces of your visit
            </Font>}>
                <Button
                    color="primary"
                    onClick={onForget}>
                        <Box sx={{mt:0.25}}>
                            <Icon icon={"forget"} color="primary"/>
                        </Box>
                        <Box sx={{ml: 1}}>
                            <Font variant="small">
                                Forget
                            </Font>
                        </Box>
                </Button>
            </Tooltip>
    </>
}
