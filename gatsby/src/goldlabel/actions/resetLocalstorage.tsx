import {
    notify,
    notifyCancel,
    navigate,
} from "../../goldlabel"

export const resetLocalstorage = (
    ting: any
): any => async (dispatch: any) => {
    try {
        dispatch(notify("resetLocalstorage","info", "Forgetting you... Goodbye"))
        const {fingerprint} = ting
        if (fingerprint){
            localStorage.removeItem("persist:goldlabel-core")
            setTimeout(() => {
                dispatch(notifyCancel())
                dispatch(navigate("https://google.com", "_self"))
            }, 2000)
        }
        
    } catch (e: any) {
        dispatch(notify("resetLocalstorage 500","error", e.toString()))
    }
}
