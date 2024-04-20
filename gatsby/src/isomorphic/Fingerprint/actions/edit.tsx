import { 
  notify,
  store,
} from "../../../goldlabel"
// import {
//   setFingerprintKey,
// } from "../"
  
export const edit = (
  newData: any
): any =>
  async (dispatch: any) => {
    try {
      const {data} = store.getState().fingerprint
      console.log("edit existing", data, newData)
      // dispatch(setFingerprintKey("checking", true))
    } catch (e: any) {
      dispatch(notify("edit 500", "error", e.toString()))
    }
}
