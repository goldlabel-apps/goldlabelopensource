import {
    store,
    setPwaKey,
    notify,
} from "../../core"

export const resetLocalstorage = (): any => async (dispatch: any) => {
    try {
        console.log("resetLocalstorage")
    } catch (e: any) {
        dispatch(notify(
            "Redux 101",
            "error", 
            `resetLocalstorage ${e.toString()}`
        ))
    }
}
