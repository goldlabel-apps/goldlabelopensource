import {FingerprintProps} from "./types"

export const fingerprintSlice: FingerprintProps = {
    slug: "fingerprint",
    open: false,
    mode: "subscribe",
    making: false,
    made: false,
    checking: false,
    checked: false,
    exists: false,
    messages: null,
    data: null,
    subscribed: null,
    fingerprints: null
}
