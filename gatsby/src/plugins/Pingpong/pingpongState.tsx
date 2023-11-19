type PingpongShape = {
    lastSaved: number
    pingpongDialog: boolean
    ipGeo: any
    ipGeoFetching: boolean
    myPingOpen: boolean
    myPing: any
    unread: number
}

export const pingpongState: PingpongShape = {
    pingpongDialog: false,
    lastSaved: 0,
    ipGeo: null,
    ipGeoFetching: false,
    myPingOpen: false,
    myPing: null,
    unread: 0,
}
