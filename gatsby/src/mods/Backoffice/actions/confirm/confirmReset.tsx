import {
    notify,
    store,
    setPwaKey,
} from "../../../../goldlabel"
  
export const confirmReset = (): any =>
    async (dispatch: any) => {
        try {
            const {backoffice} = store.getState()
            dispatch(setPwaKey({ key: "backoffice", value: {
                ...backoffice,
                confirming: false,
                confirmResponse: null,
            }}))
        } catch (error: any) {
            dispatch(notify("error", error.toString()))
        }
}
