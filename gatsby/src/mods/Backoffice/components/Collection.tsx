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
    const {activeCollection} = backoffice
    console.log("activeCollection", activeCollection)
    return <>
            <Grid container spacing={1}>
                <Grid item xs={12} md={6}>
                    <Font variant="title">
                        Collection DataGrid for...
                    </Font>
                    <pre>activeCollection: {JSON.stringify(activeCollection, null, 2)}</pre>
                </Grid>
            </Grid>
            
        </>
}

/*
<pre>backoffice: {JSON.stringify(backoffice, null, 2)}</pre>
*/