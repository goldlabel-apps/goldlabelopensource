export type Ting = {
    fbId: string
    ip: string
    fingerprint: string
    host: string
}

export type TingsSlice = {
    initted: boolean
    initting: boolean
    subscribed: boolean
    dialogOpen: boolean
    ting: Ting | null
    fbId: string | null
    fingerprint: string | null
}

export const slice: TingsSlice = {
    initted: false,
    initting: false,
    subscribed: false,
    dialogOpen: true,
    fbId: null,
    fingerprint: null,
    ting: null,
}

export default slice