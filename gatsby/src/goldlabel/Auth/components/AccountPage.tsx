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
    usePwaDispatch,
    // navigate,
    SigninOrSignup,
    usePwaSelect,
    selectAuth,
    selectTings,
    selectLocale,
    AccountMenu,
} from "../../../goldlabel"
export default function AccountPage() {
    const dispatch = usePwaDispatch()
    const auth = usePwaSelect(selectAuth)
    const tings = usePwaSelect(selectTings)
    if(!tings) return null
    const {fingerprint} = tings
    const locale = usePwaSelect(selectLocale)
    const {user} = auth
    let isSignedIn = false
    let email: string|null = null
    // const goDashboard = (e: React.MouseEvent) => {
    //     e.preventDefault()
    //     dispatch(navigate("/backoffice", "_self"))
    // }
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
                                <Font>{getTranslation("YOUR_FINGERPRINT", locale)}</Font>
                                    <Font variant="small">
                                        {fingerprint}
                                    </Font>
                                    {/* <pre>{JSON.stringify(tings, null, 2)}</pre>  */}
                                </Box>
                            </Grid>
                        </> : <Grid item xs={12}>
                                    <SigninOrSignup />
                                </Grid> }
                    
                </Grid>
            </Container>
        </>
}


/* 
<pre>user {JSON.stringify(user, null, 2)}</pre> 
*/