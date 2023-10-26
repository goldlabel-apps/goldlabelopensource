import React from "react"
import {
    Box,
    Container,
    Grid,
    CardHeader,
} from "@mui/material"
import {
    Font,
    Icon,
    getTranslation,
    SigninSignup,
    usePwaSelect,
    selectAuth,
    selectTings,
    selectLocale,
    AccountMenu,
} from "../../../goldlabel"
import {TingCard} from "../../../core"

export default function AccountPage() {
    const auth = usePwaSelect(selectAuth)
    const locale = usePwaSelect(selectLocale)
    const tings = usePwaSelect(selectTings)
    if(!tings) return null
    const {user} = auth
    let isSignedIn = false
    let email: string|null = null
    if (user){
        isSignedIn = true
        email = user.user.email
    }
    
    return <>
            <Container maxWidth="md">
                <CardHeader
                    avatar={<Icon icon="user" color="primary" />}
                    title={<Font>{getTranslation("YOUR_ACCOUNT", locale)}</Font>}
                    subheader={<Font variant="small">
                        {email}
                    </Font>}
                />
                    <Grid container>
                        {isSignedIn ? <>
                            <Grid item xs={12} md={6}>
                                <AccountMenu />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box sx={{m:2}}>
                                    <TingCard />
                                    
                                </Box>
                            </Grid>
                        </> : <Grid item xs={12}>
                                    <SigninSignup />
                                </Grid> }
                    
                </Grid>
            </Container>
        </>
}


/* 
<pre>user {JSON.stringify(user, null, 2)}</pre> 
*/