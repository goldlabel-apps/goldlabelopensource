import * as React from "react"
import {glConfig} from "../../config"
import {
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
            action={<Box sx={{display: "flex"}}>

                        <Box sx={{m:1.5}}>
                            <Font variant="small">
                                {glConfig.glVersion}
                            </Font>
                        </Box>
                        <Box>
                            <Meta frontmatter={frontmatter}/>
                        </Box>
                
                    </Box>}
        />
    </Box>
}
