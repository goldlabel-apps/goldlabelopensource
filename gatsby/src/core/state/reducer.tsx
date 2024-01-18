import {
  KeyValueShape,
} from "../../types"
import {glConfig} from "../../config"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store"
import {coreState} from "./coreState"
import {pingpongState} from "../../plugins/Pingpong"
import {backofficeState} from "../../plugins/Backoffice"
import {askoliverState} from "../../plugins/AskOliver"

type CoreReducerShape = {
  bootTime: number
  config: any
  core: any
  auth: any
  pingpong?: any
  backoffice?: any
  askoliver?: any
}

const initialState: CoreReducerShape = {
  bootTime: Date.now(),
  auth: null,
  config: glConfig,
  core: coreState,
  pingpong: pingpongState,
  backoffice: backofficeState,
  askoliver: askoliverState,
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
export const selectPingpong = (state: RootState) => state.pingpong
export const selectBackoffice = (state: RootState) => state.backoffice
export const selectAskOliver = (state: RootState) => state.askoliver

export const { setPwaKey } = pwaSlice.actions
export default pwaSlice.reducer
