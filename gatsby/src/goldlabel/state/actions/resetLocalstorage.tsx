import {
    notify,
    notifyCancel,
    navigate,
} from "../../../goldlabel"

export const resetLocalstorage = (): any => async (dispatch: any) => {
    try {
        dispatch(notify("resetLocalstorage","info", "Forgetting you... Goodbye"))
        localStorage.removeItem("persist:goldlabel-core")
        setTimeout(() => {
            dispatch(notifyCancel())
            dispatch(navigate("https://google.com", "_self"))
        }, 1500)
    } catch (e: any) {
        dispatch(notify("resetLocalstorage 500","error", e.toString()))
    }
}
