import {
    notify,
    navigate,
} from "../../goldlabel"

export const resetLocalstorage = (
    ting: any
): any => async (dispatch: any) => {
    try {
        dispatch(notify("resetLocalstorage 200","success", "Scrubbing all traces of you"))
        console.log("delete fb doc for this fingerprint")
        setTimeout(() => {
            localStorage.removeItem("persist:goldlabel-core")
            setTimeout(() => {
                // window.location.reload()
                dispatch(navigate("https://google.com", "_self"))
            }, 250)
        }, 1250)
    } catch (e: any) {
        dispatch(notify("resetLocalstorage 500","error", e.toString()))
    }
}
