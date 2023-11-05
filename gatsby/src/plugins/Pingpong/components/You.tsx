import React from "react"
import {
    Box,
    Dialog,
    Grid,
    IconButton,
    Button,
    DialogContent,
    DialogActions,
    DialogTitle,
  } from "@mui/material"
import {
    Icon,
    Font,
    usePwaSelect,
    usePwaDispatch,
    selectDisplay,
    selectPingpong,
} from "../../../core"
import {
    setPingpongKey,
} from "../../Pingpong"

export default function You() {
    const dispatch = usePwaDispatch()
    const pingpong = usePwaSelect(selectPingpong)
    const display = usePwaSelect(selectDisplay)
    let isBig = false
    if (display) isBig = !display.mobile
    const {
        uid,
        pingpongDialog, 
        // host,
        // fingerprint,
        // ip,
    } = pingpong
    
    return <>

            {/* <IconButton
                sx={{m:1}}
                color="primary"
                onClick={() => {
                    dispatch(setPingpongKey("pingpongDialog", true))
                }} >
                <Icon icon="ping" />
            </IconButton> */}

            <Dialog
                open={pingpongDialog}
                fullScreen={!isBig}
                fullWidth
                onClose={()=>{
                    dispatch(setPingpongKey("pingpongDialog", false))
                }}>

                <DialogTitle>
                <Box sx={{display:"flex"}}>

                    <Box sx={{m: 0.5}}>
                        <Icon icon="ping" color="primary" />
                    </Box>
                    <Font variant="title">
                        Your Fingerprint
                    </Font>

                </Box>

               </DialogTitle> 
               <DialogContent>
                <Font>
                uid {uid}
                </Font>
               {/* <pre>host: {JSON.stringify(host, null, 2)}</pre>
               <pre>ip: {JSON.stringify(ip, null, 2)}</pre>
               <pre>fingerprint: {JSON.stringify(fingerprint, null, 2)}</pre> */}
               </DialogContent>
               <DialogActions>
                <IconButton
                    color="primary"
                    onClick={()=>{
                        dispatch(setPingpongKey("pingpongDialog", false))
                    }}
                >
                    <Icon icon="close" />
                </IconButton>
               </DialogActions>
            </Dialog>
        </>
}
