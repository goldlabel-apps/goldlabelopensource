import {store} from "../../../core/"

export const selectTings= () => {
    const plugins = store.getState().plugins
    if (!plugins) return false
    const {tings} = plugins
    return tings
}
