import * as React from "react"
import {
  SEOBackoffice,
  AppShell,
} from "../goldlabel"

export default function AccountPage(data: any) {
  return <>
          <SEOBackoffice appData={{...data}}/>
          <AppShell appData={{...data}} type="accountPage" private={true} />
        </>
}
