import {
    notify,
    store,
    setPwaKey,
} from "../../../../goldlabel"
  
export const confirmYes = (): any =>
    async (dispatch: any) => {
        try {
            const {backoffice} = store.getState()
            dispatch(setPwaKey({ key: "backoffice", value: {
                ...backoffice,
                confirming: false,
                confirmResponse: "YES",
            }}))
        } catch (error: any) {
            dispatch(notify("error", error.toString()))
        }
}
