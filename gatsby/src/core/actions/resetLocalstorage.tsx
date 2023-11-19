import {
    store,
    setPwaKey,
    notify,
} from "../../core"

export const resetLocalstorage = (): any => async (dispatch: any) => {
    try {
        console.log("Redux Localstorage 101")
    } catch (e: any) {
        dispatch(notify(
            "Redux Localstorage 101",
            "error", 
            `resetLocalstorage ${e.toString()}`
        ))
    }
}
