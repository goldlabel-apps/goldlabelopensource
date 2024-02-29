import {
    notify,
} from "../../goldlabel"

export const resetLocalstorage = (): any => async (dispatch: any) => {
    try {
        setTimeout(() => {
            localStorage.removeItem("persist:goldlabel-core")
            setTimeout(() => {
                window.location.reload()
            }, 250)
        }, 250)
    } catch (e: any) {
        dispatch(notify("resetLocalstorage 500","error", e.toString()))
    }
}
