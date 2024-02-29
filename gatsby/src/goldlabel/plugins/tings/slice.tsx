export type TingsSlice = {
    sliceName: string
    open: boolean
    status: "idle" | "busy"
}

export const slice: TingsSlice = {
    sliceName: "tings",
    open: true,
    status: "idle"
}

export default slice;