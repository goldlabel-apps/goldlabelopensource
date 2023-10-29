import {store} from "../../../core/"

export const selectLingua = () => {
    const plugins = store.getState().plugins
    if (!plugins) return false
    const {lingua} = plugins
    return lingua
}
