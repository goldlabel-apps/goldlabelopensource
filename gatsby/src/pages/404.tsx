import * as React from "react"
import {
  PWA,
  SEO,
} from "../core"

export default function NotFoundPage(data: any) {

  return  <>
            <SEO appData={{...data}}/>
            <PWA appData={{...data}} type="markdown" />
          </>
}
