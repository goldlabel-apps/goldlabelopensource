import * as React from "react"
import {
  PWA,
} from "../core"
import {
  BackofficeSEO,
} from "../plugins/Backoffice"

export default function NotFoundPage(data: any) {

  return  <>
            <BackofficeSEO />
            <PWA appData={{...data}} type="404" />
          </>
}
