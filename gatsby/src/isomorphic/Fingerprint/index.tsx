import {Fingerprint} from "./Fingerprint"
import {fingerprintSlice} from "./fingerprintSlice"
import {setFingerprintKey} from "./actions/setFingerprintKey"
import {toggleDialog} from "./actions/toggleDialog"
import {addOutput} from "./actions/addOutput"
import {resetOutput} from "./actions/resetOutput"
import {makeFirstFingerprint} from "./actions/makeFirstFingerprint"
import {checkFingerprint} from "./actions/checkFingerprint"

import FingerprintToggle from "./components/FingerprintToggle"
import FingerprintDialog from "./components/FingerprintDialog"
import Forget from "./components/Forget"
import Output from "./components/Output"

export {
    fingerprintSlice,
    Fingerprint,
    setFingerprintKey,
    toggleDialog,
    addOutput,
    resetOutput,
    makeFirstFingerprint,
    checkFingerprint,
    
    FingerprintToggle,
    FingerprintDialog,
    Forget,
    Output,
}
