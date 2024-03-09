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
            dispatch(navigate("https://google.com", "_self"))
            dispatch(notifyCancel())
        }, 1720)
    } catch (e: any) {
        dispatch(notify("resetLocalstorage 500","error", e.toString()))
    }
}
