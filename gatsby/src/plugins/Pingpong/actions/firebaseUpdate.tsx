import axios from "axios"
import {
  store,
  notify,
} from "../../../core"

export const firebaseUpdate = (): any => async (dispatch: any) => {
  try {
    console.log("we should have sucribed to out own fbId and it will be in redux somewhere, Grab it, change it and set the doc back into firebase. It should have updated the pings list")
  } catch (e: any) {
    dispatch(notify(
      "Listingslab API 503",
      "error", 
      `firebaseDecide ${e.toString()}`
    ))
  }
}
