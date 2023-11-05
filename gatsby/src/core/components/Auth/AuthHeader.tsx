import React from "react"
import {
    Avatar,
    Box,
    IconButton,
} from "@mui/material"
import {
    Font,
    usePwaDispatch,
    navigate,
    Icon,
} from "../../../core"

export default function AuthHeader({title}) {
    const dispatch = usePwaDispatch()

    return <>
        <Box sx={{ display: "flex", my:2}}>
                <Box sx={{mr:2}}>
                <IconButton
                    size="large"
                    edge="end"
                    color="secondary"
                    aria-label="home button"
                    onClick={(e: React.MouseEvent) => {
                        e.preventDefault()
                        dispatch(navigate("/", "_self"))
                    }} >
                    <Avatar src="/svg/iOS.svg"/>
                </IconButton>
                    
                </Box>
                <Box sx={{mt:2}}>
                    <Font variant="title">
                        {title}
                    </Font>
                </Box>
                <Box sx={{flexGrow:1}} />
        </Box>
    </>
}
