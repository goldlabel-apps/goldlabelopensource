import {Tings} from "./Tings"
import tingsState from "./slice"
import {FullScreen} from "./components/FullScreen"
import {Display} from "./components/Display"
import {ToggleBar} from "./components/ToggleBar"
import {init} from "./actions/init"
import {setTingsKey} from "./actions/setTingsKey"
import {toggleFullScreen} from "./actions/toggleFullScreen"
import {iPGeo} from "./actions/iPGeo"
import {fingerprintMake} from "./actions/fingerprintMake"
import {deviceMake} from "./actions/deviceMake"
import {updateTing} from "./actions/updateTing"
import {saveTing} from "./actions/saveTing"

export {
    tingsState,
    Tings,
    init,
    ToggleBar,
    FullScreen,
    Display,
    setTingsKey,
    toggleFullScreen,
    updateTing,
    iPGeo,
    fingerprintMake,
    deviceMake,
    saveTing,
}
