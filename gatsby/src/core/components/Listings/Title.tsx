
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
    useSiteMetadata,
    navigate,
    DarkmodeToggle,
    ShareMenu,
} from "../../../core"
import {You} from "../../../plugins/Pingpong"

export default function Title(props: any) {
    const dispatch = usePwaDispatch()
    const siteMeta = useSiteMetadata()
    const {siteTitle} = siteMeta
    const {
        title,
        description,
    } = props
    let h1 = title
    if (h1 === "Home") h1 = siteTitle
    return <Box sx={{my: 1}}>
        <CardHeader 
            avatar={<IconButton 
                        sx={{ml:-1}}
                        onClick={(e: React.MouseEvent) => {
                            e.preventDefault()
                            dispatch(navigate("/", "_self"))
                        }}>
                        <Avatar src="/svg/iOS.svg" alt={`${title} ${description}`} />
                    </IconButton>}
            title={<Font variant="title">
                {h1}
            </Font>}
             subheader={<Font variant="small">
                {description}
            </Font>}
            />
    </Box>
}
