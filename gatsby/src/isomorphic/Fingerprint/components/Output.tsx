import * as React from "react"
import {
    Box,
} from "@mui/material"
import {
    usePwaSelect,
    selectFingerprint,
} from "../../../goldlabel"

export default function Output() {
    const fingerprint = usePwaSelect(selectFingerprint)
    const {output} = fingerprint
    return <Box sx={{p:1, border: "1px solid gold"}}>
                <pre>
                    {JSON.stringify(output, null, 2)}
                </pre>
            </Box>
}
