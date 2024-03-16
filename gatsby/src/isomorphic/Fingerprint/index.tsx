import {Fingerprint} from "./Fingerprint"
import {
    tingsSlice,
    fingerprintSlice,
} from "./fingerprintSlice"
import {YourFingerprint} from "./YourFingerprint"
import {Iconify} from "./components/Iconify"
import SearchBox from "./components/SearchBox"
import {ToggleBar} from "./components/ToggleBar"
import ForgetMe from "./components/ForgetMe"
import FingerprintToggle from "./components/FingerprintToggle"
import {init} from "./actions/init"
import {setTingsKey} from "./actions/setTingsKey"
import {toggleFullScreen} from "./actions/toggleFullScreen"
import {iPGeo} from "./actions/iPGeo"
import {fingerprintMake} from "./actions/fingerprintMake"
import {deviceMake} from "./actions/deviceMake"
import {updateTing} from "./actions/updateTing"
import {updateFingerprint} from "./actions/updateFingerprint"
import {saveTing} from "./actions/saveTing"
import {forgetTing} from "./actions/forgetTing"
import {newFingerprintNotify} from "./actions/newFingerprintNotify"
import {setFingerprint} from "./actions/setFingerprint"

export {
    tingsSlice,
    fingerprintSlice,
    Fingerprint,
    YourFingerprint,
    SearchBox,
    ForgetMe,
    init,
    ToggleBar,
    Iconify,
    setTingsKey,
    toggleFullScreen,
    updateTing,
    updateFingerprint,
    iPGeo,
    fingerprintMake,
    deviceMake,
    saveTing,
    forgetTing,
    newFingerprintNotify,
    setFingerprint,
    FingerprintToggle,
}
