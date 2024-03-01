import UAParser from 'ua-parser-js';
import { 
  notify,
} from "../../../../goldlabel"
// import {setTingsKey} from "../"

export const parseDevice = (): any => async (dispatch: any) => {
  try {
    const parser = new UAParser()
    const result = parser.getResult()
    console.log ("parseDevice", result)
    // dispatch(setPingpongKey("device", result))
  } catch (e: any) {
    dispatch(notify("parseDevice 500", "error", e.toString()))
  }
}
