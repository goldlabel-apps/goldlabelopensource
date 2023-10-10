import * as React from "react"
import {
  AppShell,
  SEOBackoffice,
} from "../goldlabel"

export default function BackofficePage(data: any) {
  return <>
          <SEOBackoffice appData={{...data}}/>
          <AppShell appData={{...data}} type="backoffice" private={true}>
          </AppShell>
        </>
}
