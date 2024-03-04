import UAParser from 'ua-parser-js';
import { 
  notify,
} from "../../../../goldlabel"
import {updateTing} from "../"

export const parseDevice = (): any => async (dispatch: any) => {
  try {
    const parser = new UAParser()
    const result = parser.getResult()
    // console.log("result", result)
    dispatch(updateTing("browser", result.browser.name))
    dispatch(updateTing("browserVs", result.browser.version))
    dispatch(updateTing("browserEngine", result.engine.name))
    dispatch(updateTing("os", result.os.name))
    dispatch(updateTing("osVs", result.os.version))
    dispatch(updateTing("deviceVendor", result.device.vendor))
    dispatch(updateTing("deviceModel", result.device.model))
    dispatch(updateTing("deviceType", result.device.type || "desktop"))
  } catch (e: any) {
    dispatch(notify("parseDevice 500", "error", e.toString()))
  }
}
