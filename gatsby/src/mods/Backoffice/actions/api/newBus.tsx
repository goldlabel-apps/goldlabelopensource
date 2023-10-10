import {
    notify,
    store,
    setPwaKey,
} from "../../../../goldlabel"
  
export const newBus = (
    busSlug: string,
    endpoint: string,
): any =>
    async (dispatch: any) => {
        try {
            const {backoffice} = store.getState()
            const {bus} = backoffice
            const newBus = {
                busSlug,
                endpoint,
                lastFetched: 0,
                fetching: false,
                fetched: false,
                error: null,
                data: null,
            }
            dispatch(setPwaKey({ key: "backoffice", value: {
                ...backoffice,
                bus: {
                    ...bus,
                    [busSlug]: newBus,
                }
            }}))
        } catch (error: any) {
            dispatch(notify("error", error.toString()))
        }
}
