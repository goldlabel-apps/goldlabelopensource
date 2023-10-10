import React from "react"
import {
    Box,
    Button,
    Dialog,
    DialogTitle,
    Alert,
    DialogActions,
} from "@mui/material"
import {
    Font,
    Icon,
    getTranslation,
    usePwaSelect,
    usePwaDispatch,
    selectBackoffice,
    selectLocale,
} from "../../../../goldlabel"
import {
    confirmReset,
} from "../../../Backoffice"

export default function ConfirmDialog() {
    const dispatch = usePwaDispatch()
    const locale = usePwaSelect(selectLocale)
    const backoffice = usePwaSelect(selectBackoffice)
    const {confirming} = backoffice

    const onYes = () => {
        dispatch(confirmReset())
    }

    const onNo = (e) => {
        dispatch(confirmReset())
    }

    return (<>
    <Dialog
    
        onClose={onNo}
        open={confirming}
        fullWidth
        maxWidth="sm"
        sx={{}}>
            <DialogTitle>
                <Alert severity="info">
                    <Font variant="title">
                        {getTranslation("CONFIRM_DESCRIPTION", locale)}
                    </Font>
                </Alert>
            </DialogTitle>
            <DialogActions>
                <Button onClick={onNo}>
                    <Box sx={{mr:2, mt:0.5}}>
                        <Icon icon="no" />
                    </Box>
                    <Font>
                        {getTranslation("NO", locale)}
                    </Font>
                </Button>
                <Button 
                    autoFocus 
                    onClick={onYes}>
                    <Font>
                        {getTranslation("YES", locale)}
                    </Font>
                    <Box sx={{ml:2, mt:0.5}}>
                        <Icon icon="yes" />
                    </Box>
                </Button>
            </DialogActions>
        
    </Dialog>
</>)
}
