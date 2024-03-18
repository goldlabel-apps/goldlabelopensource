import {
    notify,
    store,
    setPwaKey,
} from "../../../../goldlabel"
  
export const subscribeCollection = (
    collection: any,
): any =>
    async (dispatch: any) => {
        try {
            console.log("subscribeCollection", collection)
            // const {backoffice} = store.getState()
            // const {bus} = backoffice
            // const newBus = {
            //     busSlug,
            //     endpoint,
            //     lastFetched: 0,
            //     fetching: false,
            //     fetched: false,
            //     error: null,
            //     data: null,
            // }
            // dispatch(setPwaKey({ key: "backoffice", value: {
            //     ...backoffice,
            //     bus: {
            //         ...bus,
            //         [busSlug]: newBus,
            //     }
            // }}))
        } catch (error: any) {
            dispatch(notify("error", error.toString()))
        }
}
