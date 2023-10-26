import {
    store,
    setPwaKey,
    notify,
} from "../../core"

export const setDisplay = (): any => async (dispatch: any) => {
    try {
        const {core} = store.getState()
        let mobile = false
        const w = window.innerWidth
        const h = window.innerHeight
        if (w < 700) mobile = true
        const display = {
            mobile,
            w,
            h,
        }
        dispatch(setPwaKey({ key: "core", value: {
            ...core,
            display,
        } })) 
    } catch (e: any) {
        dispatch(notify(
            "DISPLAY 101",
            "error", 
            `setDisplay ${e.toString()}`
        ))
    }
}
