import {
  KeyValueShape,
} from "../../types"
import {glConfig} from "../../config"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store"
import {coreState} from "./coreState"

// Connect Plugins
import {fingerprintSlice} from "../plugins/Fingerprint"
import {tingsSlice} from "../plugins/Fingerprint"
import {geoState} from "../plugins/Geo"
import {flashSlice} from "../plugins/Flash"

type CoreReducerShape = {
  bootTime: number
  config: any
  core: any
  auth: any
  geo: any
  tings: any
  fingerprint: any
  flash: any
}

const initialState: CoreReducerShape = {
  bootTime: Date.now(),
  auth: null,
  config: glConfig,
  core: coreState,
  tings: tingsSlice,
  fingerprint: fingerprintSlice,
  geo: geoState,
  flash: flashSlice,
}

export const pwaSlice = createSlice({
  name: "listingslab",
  initialState,
  reducers: {
    setPwaKey: (state, action: PayloadAction<KeyValueShape>) => {
      const { key, value } = action.payload
      // @ts-ignore
      state[key] = value
    },
  },
})

export const selectBootTime = (state: RootState) => state.bootTime
export const selectConfig = (state: RootState) => state.config
export const selectCore = (state: RootState) => state.core
export const selectNotifyer = (state: RootState) => state.core.notifyer
export const selectDisplay = (state: RootState) => state.core.display
export const selectFrontmatter = (state: RootState) => state.core.frontmatter
export const selectAuth = (state: RootState) => state.auth
export const selectTings = (state: RootState) => state.tings
export const selectFingerprint = (state: RootState) => state.fingerprint
export const selectGeo = (state: RootState) => state.geo

export const { setPwaKey } = pwaSlice.actions
export default pwaSlice.reducer
