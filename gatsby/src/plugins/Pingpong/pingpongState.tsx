type PingpongShape = {
    lastSaved: number
    pingpongDialog: boolean
    ipGeo: any
    ipGeoFetching: boolean
    
}

export const pingpongState: PingpongShape = {
    pingpongDialog: false,
    lastSaved: 0,
    ipGeo: null,
    ipGeoFetching: false,
}
