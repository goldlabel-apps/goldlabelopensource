import React from "react"
import {
    Grid,
} from "@mui/material"
import {
    Font,
    usePwaSelect,
    usePwaDispatch,
    selectBackoffice,
} from "../../../goldlabel"
import {
    subscribeCollection,
} from "../../../core"

export default function Collection() {
    const dispatch = usePwaDispatch()
    const backoffice = usePwaSelect(selectBackoffice)
    React.useEffect(() => {
        const {activeCollection} = backoffice
        if (activeCollection) {
            const {collectionName} = activeCollection
            dispatch(subscribeCollection(collectionName))
        }
    }, [backoffice, dispatch])

    const {activeCollection} = backoffice
    if (!activeCollection) return null
    const {title, description} = activeCollection
    
    return <>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Font variant="title">
                        Collection: {title}
                    </Font>
                    <Font variant="small">
                        {description}
                    </Font>
                    
                </Grid>
            </Grid>
            
        </>
}

/*
    <pre>activeCollection: {JSON.stringify(activeCollection, null, 2)}</pre>
*/