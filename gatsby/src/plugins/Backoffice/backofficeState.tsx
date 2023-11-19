
type BackofficeShape = {
    fbId: string|null
    ping: any
    collection: string|null
}

export const backofficeState: BackofficeShape = {
    fbId: null,
    ping: null,
    collection: "pingpong",
}
