import {glConfig} from "../../../config"
import {
    notify,
    navigate,
} from "../../../goldlabel"

export const resetLocalstorage = (): any => async (dispatch: any) => {
    try {
        const {reduxSlug} = glConfig
        localStorage.removeItem(`persist:${reduxSlug}`)
        dispatch(navigate("https://google.com", "_self"))
    } catch (e: any) {
        dispatch(notify("resetLocalstorage 500","error", e.toString()))
    }
}
