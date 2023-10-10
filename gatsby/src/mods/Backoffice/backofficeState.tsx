export type BusShape = {
    fetching: boolean
    fetched: boolean
    lastFetched: number
    error: any
    data: any
}

export type BackofficeShape = {
    collection: string|null
    busSlug: string|null
    confirming: boolean
    addDoc: any
    changeDoc: any
    bus: any
}

export const backofficeState: BackofficeShape = {
    collection: null,
    busSlug: null,
    confirming: false,
    addDoc: null,
    changeDoc: null,
    bus: {},    
}
