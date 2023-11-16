import * as React from "react"
import {
    Avatar,
    Box, 
    CardHeader,
    IconButton,
} from "@mui/material"
import {
    Font,
    usePwaDispatch,
    navigate,
} from "../../../core"


export default function TitleMobile(props: any) {
    const dispatch = usePwaDispatch()
    const {
        title,
        description,
    } = props
    return <Box sx={{}}>
                <CardHeader 
                    avatar={<IconButton 
                                color="primary"
                                sx={{ml:-3}}
                                onClick={(e: React.MouseEvent) => {
                                    e.preventDefault()
                                    dispatch(navigate("/", "_self"))
                                }}>
                                <Avatar src="/svg/iOS.svg" alt={`${title} ${description}`} />
                            </IconButton>}
                    title={<Font variant="title">
                        {title}
                    </Font>}
                />
            </Box>
}
