import { PaletteMode } from "@mui/material"
import {
    notify,
} from "../../../goldlabel"
import {setThemeKey} from "../../Theme"

export const setPaletteMode = (
    paletteMode: PaletteMode,
): any => async (dispatch: any) => {
    try {
        dispatch(setThemeKey("paletteMode", paletteMode))
    } catch (e: any) {
        dispatch(notify("setPaletteMode 500", "error", e.toString()))
    }
}
