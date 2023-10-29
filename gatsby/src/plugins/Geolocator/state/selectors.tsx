import {store} from "../../../core/"

export const selectGeolocator = () => {
    const plugins = store.getState().plugins
    if (!plugins) return false
    const {geolocator} = plugins
    return geolocator
}
