import * as React from "react"
import {
  PWA,
  BackofficeSEO,
} from "../goldlabel"

export default function ContactPage(data: any) {
  return  <>
            <BackofficeSEO />
            <PWA appData={{...data}} type="gl-admin" />
          </>
}
