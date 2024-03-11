export type FingerprintSlice = {
    fullscreen: boolean
    displayName: string
    newFingerprint: boolean
}

export type FingerprintType = {
    fingerprint: string
    host: string
    displayName: string
    ip: string
    lat: number
    lng: number
    zoom: number
}
