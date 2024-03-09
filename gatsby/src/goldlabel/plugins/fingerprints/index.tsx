import {Tings} from "./Tings"
import tingsState from "./slice"
import {Fingerprint} from "./components/Fingerprint"
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
import {updateFbTing} from "./actions/updateFbTing"
import {saveTing} from "./actions/saveTing"
import {forgetTing} from "./actions/forgetTing"

export {
    tingsState,
    Tings,
    Fingerprint,
    ForgetMe,
    init,
    ToggleBar,
    Iconify,
    setTingsKey,
    toggleFullScreen,
    updateTing,
    updateFbTing,
    iPGeo,
    fingerprintMake,
    deviceMake,
    saveTing,
    forgetTing,
}
