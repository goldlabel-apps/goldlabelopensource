export type BusShape = {
    fetching: boolean
    fetched: boolean
    lastFetched: number
    error: any
    data: any
}

export type BackofficeShape = {
    activeCollection: any
    busSlug: string|null
    confirming: boolean
    addDoc: any
    changeDoc: any
    bus: any
}

export const backofficeState: BackofficeShape = {
    activeCollection: null,
    busSlug: null,
    confirming: false,
    addDoc: null,
    changeDoc: null,
    bus: {},    
}
