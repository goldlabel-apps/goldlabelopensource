import {
    notify,
    navigate,
} from "../../core"

export const resetLocalstorage = (): any => async (dispatch: any) => {
    try {
        setTimeout(() => {
        localStorage.removeItem("persist:goldlabel-core")
        setTimeout(() => {
            window.location.reload()
        }, 250)
        }, 250)
    } catch (e: any) {
        dispatch(notify(
            "Redux Localstorage 101",
            "error", 
            `resetLocalstorage ${e.toString()}`
        ))
    }
}
