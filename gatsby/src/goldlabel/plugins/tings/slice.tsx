export type TingsSlice = {
    sliceName: string
    dialogOpen: boolean
    status: "idle" | "busy"
}

export const slice: TingsSlice = {
    sliceName: "tings",
    dialogOpen: false,
    status: "idle"
}

export default slice;