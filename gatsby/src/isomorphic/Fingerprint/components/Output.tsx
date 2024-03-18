import * as React from "react"
import {
    Box,
} from "@mui/material"
import {
    usePwaSelect,
    selectFingerprint,
    Font,
} from "../../../goldlabel"

export default function Output() {
    const fingerprint = usePwaSelect(selectFingerprint)
    const {output} = fingerprint
    return <Box 
                sx={{
                    p:1,
                    borderRadius: 1,
                    background: "black",
                }}>
                    <Font color="white" variant="small">
                        <div dangerouslySetInnerHTML={{__html: output}} />
                    </Font>
                
            </Box>
}
/*

*/