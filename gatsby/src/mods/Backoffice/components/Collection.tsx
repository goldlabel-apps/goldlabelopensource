import React from "react"
import {
    Grid,
} from "@mui/material"
import {
    Font,
    usePwaSelect,
    selectBackoffice,
} from "../../../goldlabel"

export default function Collection() {
    const backoffice = usePwaSelect(selectBackoffice)
    const {collection} = backoffice
    console.log("Collection", collection)

    return <Grid container spacing={1}>
                <Grid item xs={12} md={6}>
                    <Font variant="title">
                        Collection DataGrid
                    </Font>
                    <Font variant="small">
                        for... {collection}
                    </Font>
                    <pre>backoffice: {JSON.stringify(backoffice, null, 2)}</pre>
                </Grid>
            </Grid>
}
