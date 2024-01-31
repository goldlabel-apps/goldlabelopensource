import * as React from "react"
import {
  PWA,
  BackofficeSEO,
} from "../goldlabel"

export default function NotFoundPage(data: any) {

  return  <>
            <BackofficeSEO />
            <PWA appData={{...data}} type="notfound" />
          </>
}
