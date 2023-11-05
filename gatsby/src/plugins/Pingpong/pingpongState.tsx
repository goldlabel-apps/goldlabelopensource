type PingpongShape = {
    created: number
    pingpongDialog: boolean
    ipGeo: any
    ipGeoFetching: boolean
}

export const pingpongState: PingpongShape = {
    pingpongDialog: false,
    created: 0,
    ipGeo: null,
    ipGeoFetching: false,
}
