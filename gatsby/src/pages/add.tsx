import * as React from "react"
import {
  AppShell,
} from "../goldlabel"

export default function AddPage(data: any) {
  return <AppShell appData={{...data}} type="add" />
}
