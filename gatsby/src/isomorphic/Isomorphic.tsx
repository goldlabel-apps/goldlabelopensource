import {glConfig} from "../config"
import React from "react"
import { FingerprintToggle} from "./Fingerprint"
import { FlashToggle } from "./Flash"
import { FormsToggle } from "./Forms"
import { GeoToggle } from "./Geo"
import { LinguaToggle } from "./Lingua"
import { ThemeToggle } from "./Theme"

export default function Isomorphic() {
  const im = glConfig.isomorphic
  return <>
          {im.theme.enabled ? <ThemeToggle /> : null}
          {im.fingerprint.enabled ? <FingerprintToggle /> : null}
          {im.flash.enabled ? <FlashToggle /> : null}
          {im.forms.enabled ? <FormsToggle /> : null}
          
          {im.lingua.enabled ? <LinguaToggle /> : null}
          

          {im.geo.enabled ? <GeoToggle /> : null}
        </>
}
