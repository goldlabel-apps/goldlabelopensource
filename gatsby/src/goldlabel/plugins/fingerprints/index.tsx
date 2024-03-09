import {Tings} from "./Tings"
import tingsState from "./slice"
import {FullScreen} from "./components/FullScreen"
import {Iconify} from "./components/Iconify"
import {ToggleBar} from "./components/ToggleBar"
import ForgetMe from "./components/ForgetMe"
import {init} from "./actions/init"
import {setTingsKey} from "./actions/setTingsKey"
import {toggleFullScreen} from "./actions/toggleFullScreen"
import {iPGeo} from "./actions/iPGeo"
import {fingerprintMake} from "./actions/fingerprintMake"
import {deviceMake} from "./actions/deviceMake"
import {updateTing} from "./actions/updateTing"
import {saveTing} from "./actions/saveTing"
import {forgetTing} from "./actions/forgetTing"

export {
    tingsState,
    Tings,
    ForgetMe,
    init,
    ToggleBar,
    Iconify,
    FullScreen,
    setTingsKey,
    toggleFullScreen,
    updateTing,
    iPGeo,
    fingerprintMake,
    deviceMake,
    saveTing,
    forgetTing,
}
