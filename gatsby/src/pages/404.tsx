import * as React from "react"
import {
  PWA,
  BackofficeSEO,
} from "../core"

export default function NotFoundPage(data: any) {

  return  <>
            <BackofficeSEO />
            <PWA appData={{...data}} type="notfound" />
          </>
}
