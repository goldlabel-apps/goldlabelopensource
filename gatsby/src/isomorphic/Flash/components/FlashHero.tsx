import {glConfig} from "../../../config"
import * as React from "react"
import {
    selectDisplay,
    usePwaSelect,
} from "../../../goldlabel"
import {ReinventingFlash} from "../../Flash"

export default function FlashHero() {
  const display = usePwaSelect(selectDisplay)
  const flashConfig = glConfig.isomorphic.flash
  const {
    hero,
    scenes,
  } = flashConfig
  let mobile = true
  if (display) mobile = display.mobile
  const sceneSlug = scenes[0]
  if (!hero) return null
  let scene: any = null
  if (sceneSlug === "ReinventingFlash") scene = <ReinventingFlash />
  if (!scene) return null
  return scene
}
