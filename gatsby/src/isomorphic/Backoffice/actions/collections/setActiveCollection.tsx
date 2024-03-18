import {
    notify,
    store,
    setPwaKey,
} from "../../../../goldlabel"

export const setActiveCollection = (
    collection: any
): any =>
    async (dispatch: any) => {
        try {
            const {backoffice} = store.getState()
            dispatch(setPwaKey({ key: "backoffice", value: {
                ...backoffice,
                activeCollection: collection,
            }}))
        } catch (e: any) {
            dispatch(notify("error", e.toString()))
        }
}
