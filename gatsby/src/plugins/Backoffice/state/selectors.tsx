import {store} from "../../../core/"

export const selectBackoffice = () => {
    const plugins = store.getState().plugins
    if (!plugins) return false
    const {backoffice} = plugins
    return backoffice
}
