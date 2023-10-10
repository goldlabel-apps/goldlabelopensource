import React from "react"
import {
    Box,
} from "@mui/material"
import {
    Font,
    getTranslation,
    usePwaSelect,
    selectBackoffice,
    selectLocale,
} from "../../../../goldlabel"

export default function ChangeDoc() {
    const locale = usePwaSelect(selectLocale)
    const backoffice = usePwaSelect(selectBackoffice)
    const {changeDoc} = backoffice
    if (!changeDoc) return null
    return <>
            <Box sx={{}}>
                <Font>
                    {getTranslation("CHANGE_DOC", locale)}
                </Font>
                <pre>changeDoc: {JSON.stringify(changeDoc, null, 2)}</pre>
            </Box>
        </>
}
