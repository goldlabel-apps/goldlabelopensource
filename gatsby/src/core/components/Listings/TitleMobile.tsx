import * as React from "react"
import {
    Avatar,
    Box, 
    CardHeader,
    IconButton,
} from "@mui/material"
import {
    Font,
    Icon,
    usePwaDispatch,
    navigate,
} from "../../../core"

export default function TitleMobile(props: any) {
    const dispatch = usePwaDispatch()
    const {
        title,
        description,
        // icon,
    } = props
    return <Box sx={{my: 1}}>
        <CardHeader 
            avatar={<IconButton 
                        color="primary"
                        sx={{ml:-2}}
                        onClick={(e: React.MouseEvent) => {
                            e.preventDefault()
                            dispatch(navigate("/", "_self"))
                        }}>
                        <Avatar src="/svg/iOS.svg" alt={`${title} ${description}`} />
                    </IconButton>}
            title={<Font variant="title">
                {title}
            </Font>}
            subheader={<Font variant="small">
                {description}
            </Font>  }
        />
    </Box>
}
