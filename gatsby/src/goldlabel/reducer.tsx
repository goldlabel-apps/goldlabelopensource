import {
  KeyValueShape,
  PwaReduxShape,
} from "../types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./redux/store"
import {geolocatorState} from "./packages/Geolocator/geolocatorState"
import {listingsState} from "./packages/Listings/listingsState"
import {contactState} from "./packages/Contact/contactState"
import {tingsState} from "./packages/Tings/tingsState"
import {goldlabelConfig} from "./goldlabelConfig"

const initialState: PwaReduxShape = {
  bootTime: Date.now(),
  fbId: null,
  darkmode: true,
  authed: null,
  route: null,
  frontmatter: null,
  locale: goldlabelConfig.siteDefaultLocale || "en",
  categories: true,
  settings: false,
  geolocator: geolocatorState,
  geo: geolocatorState,
  tings: tingsState,
  contact: contactState,
  listings: listingsState,
}


export const pwaSlice = createSlice({
  name: "goldlabel",
  initialState,
  reducers: {
    setPwaKey: (state, action: PayloadAction<KeyValueShape>) => {
      const { key, value } = action.payload
      // @ts-ignore
      state[key] = value
    },
  },
})

export const selectPWA = (state: RootState) => state
export const selectDarkMode = (state: RootState) => state.darkmode
export const selectGeo= (state: RootState) => state.geo
export const selectLocale = (state: RootState) => state.locale
export const selectAuth = (state: RootState) => state.authed
export const selectTings = (state: RootState) => state.tings

export const { setPwaKey } = pwaSlice.actions
export default pwaSlice.reducer
