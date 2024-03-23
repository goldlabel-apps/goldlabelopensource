import {glConfig} from "../config"
import React from "react"
import { FlashToggle } from "./Flash"
import { FormsToggle } from "./Forms"
import { GeoToggle } from "./Geo"
import { LinguaToggle } from "./Lingua"
import { ThemeToggle } from "./Theme"

export default function Isomorphic() {
  const im = glConfig.isomorphic
  return <>
          {im.theme.toggle ? <ThemeToggle /> : null}
          {im.flash.toggle ? <FlashToggle /> : null}
          {im.forms.toggle ? <FormsToggle /> : null}
          {im.lingua.toggle ? <LinguaToggle /> : null}
          {im.geo.toggle ? <GeoToggle /> : null}
        </>
}
