export type FlashSlice = {
    slug: string
    open: boolean
    playing: boolean
    audio: boolean
    video: boolean
}

export const flashSlice: any = {
    slug: "flash",
    open: false,
    playing: false,
    audio: true,
    video: null,
}
