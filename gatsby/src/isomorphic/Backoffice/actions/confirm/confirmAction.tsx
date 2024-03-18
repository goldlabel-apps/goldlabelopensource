import {
    notify,
    store,
    setPwaKey,
} from "../../../../goldlabel"
  
export const confirmAction = (): any =>
    async (dispatch: any) => {
        try {
            const {backoffice} = store.getState()
            dispatch(setPwaKey({ key: "backoffice", value: {
                ...backoffice,
                confirming: true,
            }}))
        } catch (error: any) {
            dispatch(notify("error", error.toString()))
        }
}
