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

export default function AddDoc() {
    const locale = usePwaSelect(selectLocale)
    const backoffice = usePwaSelect(selectBackoffice)
    const {addDoc} = backoffice
    if (!addDoc) return null
    return <>
                <Box sx={{}}>
                    <Font>
                        {getTranslation("ADD_DOC", locale)}
                    </Font>
                    <pre>addDoc: {JSON.stringify(addDoc, null, 2)}</pre>
                </Box>
            </>
}
