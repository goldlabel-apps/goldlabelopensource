import * as React from "react"
import {
  PWA,
} from "../core"
import {
  BackofficeSEO,
} from "../plugins/Backoffice"

export default function BackofficePage(data: any) {
  return  <>
            <BackofficeSEO />
            <PWA appData={{...data}} type="backoffice" />
          </>
}
