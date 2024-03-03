export type TingsSlice = {
    sliceName: string
    dialogOpen: boolean
    status: "idle" | "busy"
    ting: Ting | null
    tillNextTing: number
    fingerprint: string | null
    host: string | null
}

export type Ting = {
    ip: string
    fingerprint: string
}

export const slice: TingsSlice = {
    sliceName: "tings",
    dialogOpen: false,
    status: "idle",
    ting: null,
    tillNextTing: 30,
    fingerprint: null,
    host: null,
}

export default slice