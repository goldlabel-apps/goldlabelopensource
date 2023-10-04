export type GatsbyShape = {
  siteUrl: string
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
  siteDefaultLocale?: string
}

export type FormsShape = {
  initted?: boolean
}

export type GeolocatorShape = {
  blinking: boolean
}

export type ConfigShape = {
  siteTitle: string
  siteDescription: string
  siteUrl: string
  siteImage: string
  siteIcon: string
  siteTwitter: string
  siteTheme: string
  siteKeywords: string
  siteFooterUrl?: string
  siteDefaultLocale?: string
  themes: Array<ThemeShape>
  features: any
}

export type ThemeShape = {
  slug: string
  primaryColor: string
  secondaryColor: string
  backgroundColor?: string
  font?: string
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
