import axios from "axios"
import { 
  notify,
} from "../../../../goldlabel"
import {updateBus} from "../../../Backoffice"

export const fetchAPI = (
  slug: string,
  endpoint: string,
): any =>
  async (dispatch: any) => {
    try {
      dispatch(updateBus(slug, "fetching", true))
      setTimeout(() => {
        axios.get(endpoint)
        .then(function (res) {
          console.log("data", res.data.data)
          // dispatch(updateBus(slug, "lastFetched", Date.now()))
          // dispatch(updateBus(slug, "fetching", false))
          // dispatch(updateBus(slug, "fetched", true))
          // dispatch(updateBus(slug, "data", res.data.data))
        })
        .catch(function (e) {
          dispatch(updateBus(slug, "fetching", false))
          dispatch(updateBus(slug, "fetched", true))
          dispatch(updateBus(slug, "error", e))
          dispatch(notify("error", `${e.toString()}`))
        })
      }, 100)
    } catch (e: any) {
      dispatch(notify("error", e))
    }
}
