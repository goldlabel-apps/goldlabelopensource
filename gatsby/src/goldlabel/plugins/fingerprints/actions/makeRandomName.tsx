import {
  notify,
} from "../../../../goldlabel"

export const makeRandomName = (): any =>
  async (dispatch: any) => {
    try {
        let randomName = "fucker"
        dispatch(notify("makeRandomName", "success", `random name: ${randomName}`))
        console.log("makeRandomName", randomName)
        return randomName
    } catch (e: any) {
        dispatch(notify("makeRandomName 500", "error",e.toString()))
    }
}
