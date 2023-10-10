import {
    notify,
    store,
    setPwaKey,
} from "../../../../goldlabel"
  
export const confirmNo = (): any =>
    async (dispatch: any) => {
        try {
            const {backoffice} = store.getState()
            dispatch(setPwaKey({ key: "backoffice", value: {
                ...backoffice,
                confirming: false,
                confirmResponse: "NO",
            }}))
        } catch (error: any) {
            dispatch(notify("error", error.toString()))
        }
}
