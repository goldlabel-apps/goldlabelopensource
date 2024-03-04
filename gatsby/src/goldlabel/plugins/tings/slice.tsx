export type TingsSlice = {
    ting: Ting | null
    fbId: string | null
    dialogOpen: boolean
    subscribed: boolean
    fingerprint: string | null
    host: string | null
}

export type Ting = {
    fbId: string
    ip: string
    fingerprint: string
}

export const slice: TingsSlice = {
    dialogOpen: true,
    subscribed: false,
    fbId: null,
    host: null,
    fingerprint: null,
    ting: null,
}

export default slice