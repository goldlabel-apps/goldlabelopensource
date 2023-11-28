import UAParser from 'ua-parser-js';
import { 
  notify,
} from "../../../core"
import {setPingpongKey} from "../../Pingpong"

export const saveDevice = (): any => async (dispatch: any) => {
  try {
    const parser = new UAParser()
    const result = parser.getResult()
    dispatch(setPingpongKey("device", result))
  } catch (e: any) {
    dispatch(notify(
      "Pingpong 502",
      "error", 
      `saveDevice ${e.toString()}`
    ))
  }
}
