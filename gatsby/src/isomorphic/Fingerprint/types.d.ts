export type Fingerprint = {
    uid: string
    host: string
    displayName: string
    ip: string
    geo: {
      lat: number
      lng: number
      zoom: number
    }
    device: {
    }
  }