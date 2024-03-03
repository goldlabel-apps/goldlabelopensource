export type TingsSlice = {
    ting: Ting | null
    dialogOpen: boolean
    fingerprint: string | null
    host: string | null
}

export type Ting = {
    ip: string
    fingerprint: string
}

export const slice: TingsSlice = {
    dialogOpen: true,
    host: null,
    fingerprint: null,
    ting: null,
}

export default slice