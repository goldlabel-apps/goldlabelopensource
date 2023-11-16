import * as React from "react"
import {
  PWA,
  BackofficeSEO,
} from "../core"


export default function BackofficePage(data: any) {
  return  <>
            <BackofficeSEO />
            <PWA appData={{...data}} type="backoffice" />
          </>
}
