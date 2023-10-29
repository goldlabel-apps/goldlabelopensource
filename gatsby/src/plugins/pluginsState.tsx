import {PluginsShape} from "./types"
import {geolocatorState} from "./Geolocator"
import {linguaState} from "./Lingua"
import {tingsState} from "./Tings"

export const pluginsState: PluginsShape = {
    geolocator: geolocatorState,
    lingua: linguaState,
    tings: tingsState,
}
