import React from "react"
import {
    Chip,
    IconButton,
} from "@mui/material"
import {
    Font,
    Icon,
    usePwaDispatch,
    navigate,
    usePwaSelect,
    selectAuth,
    firebaseSignout,
} from "../../../core"

export default function AuthChip() {
    const dispatch = usePwaDispatch()
    const auth = usePwaSelect(selectAuth)
    let user:any = null
    let email: string|null = null 
    if (auth) user = auth.user
    if (user) email = user.user.email
    const goAccount = (e: React.MouseEvent) => {
        e.preventDefault()
        // dispatch(navigate("/account", "_self"))
    }
    const signOut = (e: React.MouseEvent) => {
        e.preventDefault()
        dispatch(firebaseSignout())
    }
    return <>
            { user ? <>
                
                    <Chip
                        variant="outlined"
                        color="primary"
                        sx={{height: 30, ml:1.5, border: "none"}}
                        icon={<Icon icon="blokey" />}
                        label={<Font>{email}</Font>}
                        // onClick={goAccount}
                    />

                    <IconButton
                        color="primary"
                        onClick={signOut}>
                        <Icon icon="signout" />
                    </IconButton>

                    </>
                    : null}
            </>
}

