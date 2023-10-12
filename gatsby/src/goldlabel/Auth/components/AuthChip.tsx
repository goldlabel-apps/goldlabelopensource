import React from "react"
import {
    Box,
    Chip,
    IconButton,
    Tooltip,
} from "@mui/material"
import {
    Font,
    Icon,
    usePwaDispatch,
    navigate,
    usePwaSelect,
    selectAuth,
} from "../../../goldlabel"

export default function AuthChip() {
    const dispatch = usePwaDispatch()
    const auth = usePwaSelect(selectAuth)
    const {user} = auth
    let email: string|null = null 
    if (user) email = user.user.email

    const goBackoffice = (e: React.MouseEvent) => {
        e.preventDefault()
        dispatch(navigate("/backoffice", "_self"))
    }

    const goAccount = (e: React.MouseEvent) => {
        e.preventDefault()
        dispatch(navigate("/account", "_self"))
    }

    return <>
            {user ? <Chip
                        variant="outlined"
                        color="primary"
                        sx={{height: 30, ml:1.5, border: "none"}}
                        icon={<Icon icon="user" />}
                        label={<Font>{email}</Font>}
                        onClick={goAccount}
                    />
                    : null}
            </>
}

/*
<Tooltip title="Sign in to Backoffice">
    <IconButton 
        color="primary"
        onClick={goBackoffice}>
        <Icon icon="backoffice" />
    </IconButton>
</Tooltip>
*/