import * as React from "react"
import {
  Alert,
  Container,
} from "@mui/material"
import {
  AppShell,
  Font,
} from "../goldlabel"

export default function TingsPage(data: any) {

  return <AppShell appData={{...data}} type="tings" privte={true}>
            <Container maxWidth="lg">
              <Alert
                sx={{m:2}}
                severity="success">
                  <Font>Tings</Font>
              </Alert>
            </Container>
          </AppShell>
}
