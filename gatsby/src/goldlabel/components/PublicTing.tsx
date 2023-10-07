import React from "react"
import {
    Box,
    IconButton,
    CardContent,
    CardHeader,
    CardMedia,
    Grid,
} from "@mui/material"
import {
    Font,
    Icon,
    usePwaSelect,
    selectTings,
    selectLocale,
} from "../../goldlabel"
import {getTranslation} from "../../mods/Lingua"
export default function PublicTing() {
    const tings = usePwaSelect(selectTings)
    const {fingerprint} = tings
    const locale = usePwaSelect(selectLocale)
    return (<>
    <Box sx={{}}>
        <CardHeader 
            avatar={<>
                        <IconButton
                            color="primary"
                            sx={{mt:2}}
                            onClick={() => {
                                window.open("/", "_self")
                            }}>
                            <Icon icon="ting" />
                        </IconButton>
                    </>}
            title={<Font variant="title">
                        {getTranslation("TINGS", locale)}
                    </Font>}
            subheader={<Font>
                        What this App has learned about you so far
                    </Font>}
        />
        <CardContent>
            <Grid container>
                <Grid item xs={12} md={8}>
                    <Font>
                        {getTranslation("WHAT_ARE_TINGS", locale)}
                    </Font>
                    
                    <Font>
                        {getTranslation("WHAT_IS_FINGERPRINT", locale)}
                    </Font>

                </Grid>
                <Grid item xs={12} md={4}>
                    <CardMedia 
                        component={"img"}
                        height={200}
                        src={"/png/iOS.png"}
                        alt={"Tings"}
                    />
                </Grid>
                
            </Grid>
        </CardContent>
    </Box>
</>)
}
