export type ForecastShape = {
    hours: Array<any>
    meta: Array<any>
}

export type WeathermapShape = {
    fbId?: string
    updated?: number|null
    lat?: number
    lng?: number
    zoom?: number
    mapHeight?: number
    stormglass: ForecastShape|null
    fetching: boolean
    fetched: boolean
    timeFetched: number|null
    hourIndex: number
    paramMeta: Array<any>
    meta: any
}
