// import { PaletteMode } from "@mui/material"
import {
    notify,
} from "../../../goldlabel"
import {setThemeKey} from "../../Theme"

export const setColor = (
    color: string,
): any => async (dispatch: any) => {
    try {
        dispatch(setThemeKey("color", color))
    } catch (e: any) {
        dispatch(notify("setColor 500", "error", e.toString()))
    }
}
