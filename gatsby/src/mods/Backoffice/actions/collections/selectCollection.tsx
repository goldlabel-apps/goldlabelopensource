import {
    notify,
    store,
    setPwaKey,
} from "../../../../goldlabel"

export const selectCollection = (
    collection: string|null,
    busSlug: string|null,    
): any =>
    async (dispatch: any) => {
        try {
            const {backoffice} = store.getState()
            dispatch(setPwaKey({ key: "backoffice", value: {
                ...backoffice,
                collection,
                busSlug,
            }}))
        } catch (e: any) {
            dispatch(notify("error", e.toString()))
        }
}
