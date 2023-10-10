import React from "react"
import {
  Box,
  Container,
} from "@mui/material"
import {
  Icon,
  Font,
  getTranslation,
  usePwaDispatch,
  usePwaSelect,
  selectLocale,
} from "../../../goldlabel"


export function Signup() {
  const dispatch = usePwaDispatch()
  const locale = usePwaSelect(selectLocale)
  
  return (<>
            <Container maxWidth="xs">
              <Box sx={{my:1, margin: "auto"}}>
                <Box sx={{my:2}}>
                    <Box>
                      <Font variant="title">
                        {getTranslation("SIGNUP", locale)}
                      </Font>
                    </Box>
                </Box>
              </Box>
            </Container>
        </>
  )
}
/*
<pre>authed: {JSON.stringify(authed, null, 2)}</pre>
*/