import * as React from "react"
import {
  PWA,
  BackofficeSEO,
} from "../goldlabel"

export default function GoldlabelAdminPage(data: any) {
  return  <>
            <BackofficeSEO />
            <PWA appData={{...data}} type="gl-admin" />
          </>
}
