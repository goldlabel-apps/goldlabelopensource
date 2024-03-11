import {Fingerprint} from "./Fingerprint"
import {
    tingsSlice,
    fingerprintSlice,
} from "./fingerprintSlice"
import {YourTing} from "./YourTing"
import {Iconify} from "./components/Iconify"
import Controls from "./components/Controls"
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
import {postEmail} from "./actions/postEmail"

export {
    tingsSlice,
    fingerprintSlice,
    Fingerprint,
    YourTing,
    Controls,
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
    postEmail,
}
