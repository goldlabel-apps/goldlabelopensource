import Fingerprint from "./Fingerprint"
import SingleFingerprint from "./components/SingleFingerprint"
import DisplayDevice from "./components/DisplayDevice"
import NameEditor from "./components/NameEditor"
import AvatarEditor from "./components/AvatarEditor"
import Visitor from "./components/Visitor"
import {fingerprintSlice} from "./reducer"
import {setFingerprintKey} from "./actions/setFingerprintKey"
import {make} from "./actions/make"
import {check} from "./actions/check"
import {save} from "./actions/save"
import {edit} from "./actions/edit"
import {email} from "./actions/email"
import {forget} from "./actions/forget"
import {randomDisplayName} from "./actions/randomDisplayName"
import {remove} from "./actions/remove"
import {update} from "./actions/update"

export {
    fingerprintSlice,
    Fingerprint,
    NameEditor,
    SingleFingerprint,
    DisplayDevice,
    Visitor,
    setFingerprintKey,
    make,
    check,
    save,
    edit,
    email,
    forget,
    randomDisplayName,
    remove,
    update,
    AvatarEditor,
}
