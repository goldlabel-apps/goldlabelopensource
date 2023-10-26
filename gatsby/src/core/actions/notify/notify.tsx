import {
    AlertColor,
} from "@mui/material"
import {
  store,
  setPwaKey,
} from "../../../core"

export const notify = (
  code: string,
  severity: AlertColor, 
  message: string
): any =>
  async (dispatch: any) => {
    try {
      const {core} = store.getState()
      dispatch(setPwaKey({ key: "core", value: {
        ...core,
        notifyer: {
          code,
          severity,
          message,
        },
      }}))
    } catch (e: any) {
      console.warn("notify", e.toString())
  }
}
