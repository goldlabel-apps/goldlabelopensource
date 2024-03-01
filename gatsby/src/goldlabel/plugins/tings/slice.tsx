export type TingsSlice = {
    sliceName: string
    dialogOpen: boolean
    status: "idle" | "busy"
    ting: Ting | null
}

export type Ting = {
    ip: string
}

export const slice: TingsSlice = {
    sliceName: "tings",
    dialogOpen: false,
    status: "idle",
    ting: null,
}

export default slice