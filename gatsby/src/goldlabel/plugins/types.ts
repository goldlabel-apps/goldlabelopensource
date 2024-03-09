export type Ting = {
    fingerprint: string
    host: string
    displayName: string
}

export type TingsSlice = {
    dialogOpen: boolean
    initted: boolean
    initting: boolean
    subscribed: boolean
    ting: Ting | null
    fbTing: Ting | null
}
