import {
    notify,
    navigate,
} from "../../../goldlabel"

export const resetLocalstorage = (): any => async (dispatch: any) => {
    try {
        localStorage.removeItem("persist:goldlabel-core")
        dispatch(navigate("https://google.com", "_self"))
    } catch (e: any) {
        dispatch(notify("resetLocalstorage 500","error", e.toString()))
    }
}
