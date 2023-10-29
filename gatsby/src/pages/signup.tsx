import * as React from "react"
import {
  PWA,
  BackofficeSEO,
} from "../core"


export default function AuthPage(data: any) {
  return  <>
            <BackofficeSEO />
            <PWA appData={{...data}} type="signup" />
          </>
}
