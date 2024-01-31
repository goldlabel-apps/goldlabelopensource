import {
    notify,
    navigate,
} from "../../goldlabel"

export const resetLocalstorage = (): any => async (dispatch: any) => {
    try {
        setTimeout(() => {
        localStorage.removeItem("persist:goldlabel")
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
