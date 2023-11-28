export type GatsbyShape = {
  siteUrl: string
  siteEmail: string
  siteDisplayname: string
  siteIcon: string
  siteTitle: string
  title: string
  siteDescription: string
  siteKeywords: string
  description: string
  siteImage: string
  image: string
  siteTwitter: string
  twitterUsername: string
  siteTheme: string
}

export type ConfigShape = {
  siteTitle: string
  siteDescription: string
  siteUrl: string
  siteDisplayname: string
  siteEmail: string
  siteImage: string
  siteIcon: string
  siteFacebook: string
  siteTwitter: string
  siteTheme: string
  sharing: boolean
  siteKeywords: string
  siteFooterUrl?: string
  siteDefaultLocale?: string
  theme: ThemeShape
  mapbox?: any
  membersOnly?: boolean
  backoffice?: any
  darkmodeEnabled: boolean
  debuggerEnabled: boolean
}

export type CoreShape = {
  user: any
  darkmode: boolean
  debuggerOpen: any
  allHosts: Array<any>
  frontmatter: any
  authed: boolean
  authing: boolean
  display: any
  notifyer: any
  footerMenuOpen: boolean
  scroll: boolean
  signinOpen: boolean
  accountDialogOpen: boolean
}

export type GeolocatorShape = {
  blinking: boolean
  bigMapOpen: boolean
  flyTo?: any
  config: FeatureCongigShape
}

export type PingpongShape = {
  fbId: string | null
  publicPing: any
  ipGeo: any
  ipGeoFetching: boolean
  uidChecking: boolean
  exists: boolean
  device: any
}

export type FeatureCongigShape = {
  enabled: boolean
  options: any
}

export type FormsShape = {
  initted?: boolean
}

export type ThemeShape = {
  slug: string
  primaryColor: string
  secondaryColor: string
  defaultDarkmode?: boolean
}

export type AuthShape = {
  authing: boolean
  user: any
}

export type GeoType = {
  region: string
  placename: string
  lat: number
  lng: number
  zoom: number
}

export type EditShape = {
  collection: CollectionShape
  fbId: string
}

export type DocFetchShape = {
  endpoint: string
  fetching: boolean
  fetched: boolean
  doc: any|null
  error: any|null
}

export type CollectionShape = {
  slug: string
  title: string
  description?: string
  icon: string
  fsUrl: string
  apiUrl?: string
  fields: Array<FieldShape>
}

export type CRUDShape = {
  collections: Array<CollectionShape>
}

export type FieldShape = {
  title: string
  slug: string
} 

export type KeyValueShape {
  key: string
  value: any
}
