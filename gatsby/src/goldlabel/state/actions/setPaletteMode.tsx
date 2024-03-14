import {
    // store,
    // setPwaKey,
    notify,
} from "../../../goldlabel"

export const setPaletteMode = (
    paletteMode: string,
): any => async (dispatch: any) => {
    try {
        // const {core} = store.getState()
        // dispatch(setPwaKey({ key: "core", value: {
        //     ...core,
        //     frontmatter,
        // } })) 
    } catch (e: any) {
        dispatch(notify("setPaletteMode 500", "error", e.toString()))
    }
}
