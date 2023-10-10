import React from "react"
import {
    Container,
    Grid,
    CardHeader,
} from "@mui/material"
import {
    Font,
    Icon,
    getTranslation,
    usePwaDispatch,
    navigate,
    Signin,
    Signup,
    usePwaSelect,
    selectAuth,
    selectLocale,
    AccountMenu,
} from "../../../goldlabel"
export default function AccountPage() {
    const dispatch = usePwaDispatch()
    const auth = usePwaSelect(selectAuth)
    const locale = usePwaSelect(selectLocale)
    const {user} = auth
    let isSignedIn = false
    let email: string|null = null

    const goDashboard = (e: React.MouseEvent) => {
        e.preventDefault()
        dispatch(navigate("/backoffice", "_self"))
    }

    if (user){
        isSignedIn = true
        email = user.user.email
    }
    

    return <>
            <Container maxWidth="md">
                <Grid container>

                    <Grid item xs={12}>
                        <CardHeader
                            avatar={<Icon icon="user" color="primary" />}
                            title={<Font variant="giant">
                                    {getTranslation("YOUR_ACCOUNT", locale)}
                                </Font>}
                            subheader={<Font variant="small">
                                {email}
                            </Font>}
                        />
                    </Grid>
                    {!isSignedIn ? <>
                        <Grid item xs={12} md={6}>
                            <Signin />
                        </Grid> 
                        {/* <Grid item xs={12} md={6}>
                            <Signup />
                        </Grid>  */}
                    </>: null }

                    <Grid item xs={12} md={6}>
                        <AccountMenu />
                        {!isSignedIn ? <Signup /> : null}
                        
                    </Grid>

                </Grid>

            </Container>
            
        </>
}


/* 



<pre>user {JSON.stringify(user, null, 2)}</pre> 



*/