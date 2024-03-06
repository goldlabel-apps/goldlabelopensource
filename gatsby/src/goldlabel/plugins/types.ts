export type Ting = {
    fbId: string
}

export type TingsSlice = {
    initted: boolean
    initting: boolean
    subscribed: boolean
    dialogOpen: boolean
    ting: Ting | null
    fbId: string | null
}