import {
  KeyValueShape,
} from "../types"
import {glConfig} from "../config"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store"
import {coreState} from "./coreState"

const initialState: any = {
  bootTime: Date.now(),
  config: glConfig,
  core: coreState,
}

export const pwaSlice = createSlice({
  name: "gl-core",
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
export const selectNotifyr = (state: RootState) => state.core.notifyr
export const selectTings = (state: RootState) => state.core.tings
export const selectDisplay = (state: RootState) => state.core.display
export const selectFrontmatter = (state: RootState) => state.core.frontmatter

export const { setPwaKey } = pwaSlice.actions
export default pwaSlice.reducer
