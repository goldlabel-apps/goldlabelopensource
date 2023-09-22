import { 
  setPwaKey,
} from "../../"
import {RouteShape} from "../../types"

export const setRoute =
  (route: RouteShape): any =>
  async (dispatch: any) => {
    try {
      dispatch(setPwaKey({ key: "route", value: route}))
    } catch (error: any) {
      console.log("Action error: setRoute", error)
    }
}
