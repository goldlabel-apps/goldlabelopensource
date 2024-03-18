import {
    notify,
    store,
    setPwaKey,
} from "../../../../goldlabel"
  
export const updateBus = (
    slug: string,
    key: string,
    value: any,
): any =>
    async (dispatch: any) => {
        try {
            const {backoffice} = store.getState()
            const {bus} = backoffice
            dispatch(setPwaKey({ key: "backoffice", value: {
                ...backoffice,
                bus: {
                    ...bus,
                    [slug]: {
                        ...bus[slug],
                        [key]: value,
                    },
                }
            }}))
        } catch (error: any) {
            dispatch(notify("error", error.toString()))
        }
}
