import {
    store,
    setPwaKey,
    notify,
} from "../../core"

export const setFrontmatter = (
    frontmatter: any,
): any => async (dispatch: any) => {
    try {
        const {core} = store.getState()
        dispatch(setPwaKey({ key: "core", value: {
            ...core,
            frontmatter,
        } })) 
    } catch (e: any) {
        dispatch(notify(
            "MD 101",
            "error", 
            `setFrontmatter ${e.toString()}`
        ))
    }
}
