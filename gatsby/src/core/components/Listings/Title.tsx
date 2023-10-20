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
    Meta,
} from "../../../core"

export default function Title(props: any) {
    const dispatch = usePwaDispatch()
    const {
        title,
        frontmatter,
        icon,
    } = props
    return <Box sx={{my: 1}}>
        <CardHeader 
            avatar={<IconButton 
                        sx={{ml:-1}}
                        onClick={(e: React.MouseEvent) => {
                            e.preventDefault()
                            dispatch(navigate("/", "_self"))
                        }}>
                        <Icon icon={icon || "home"} color="primary"/>
                    </IconButton>}
            title={<Font variant="title">
                {title}
            </Font>}
            action={<>
                <Meta frontmatter={frontmatter}/>
            </>}
            // subheader={<Font variant="small">
            //     {description}
            // </Font>  }
        />
    </Box>
}
