import * as React from "react"
import {
  PWA,
  GoldlabelSEO,
} from "../goldlabel"

export default function GoldlabelPage(data: any) {
  return  <>
            <GoldlabelSEO />
            <PWA appData={{...data}} type="goldlabel" />
          </>
}
