export type GeoSlice = {
    fullscreenMap: boolean
    default: {
        lat: number
        lng: number
        zoom: number
    }
}

export const geoSlice: GeoSlice = {
    fullscreenMap: false,
    default: {
        lat: 35.872015923874095,
        lng: 14.440090918742467,
        zoom: 10,
    }
}

export default geoSlice
