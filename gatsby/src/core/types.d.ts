import {
    AlertColor,
} from "@mui/material"

export type CoreShape = {
    user: any
    darkmode: boolean
    allHosts: Array<any>
    frontmatter: any
    authed: boolean
    display: any
    notifyer: any
    footerMenuOpen: boolean
    scroll: boolean
}

export type FieldShape = {
    title: string
    slug: string
}

export type GatsbyShape = {
    version: string
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
    siteFacebook: string
    twitterUsername: string
    siteTheme: string
    siteDefaultLocale?: string
}

export type ConfigShape = {
    glVersion: string
    siteTitle: string
    siteDescription: string
    siteUrl: string
    siteDisplayname: string
    siteEmail: string
    siteImage: string
    siteIcon: string
    siteTwitter: string
    siteFacebook: string
    siteTheme: string
    siteKeywords: string
    siteFooterUrl?: string
    siteDefaultLocale?: string
    theme: ThemeShape
    features: any
}

export type LinkShape = {
    url: string
    target?: "_self"|"_blank"
    icon?: string
    title?: string
    description?: string
}

export type KeyValueShape = {
    key: string
    value: any
}

export type FeedbackShape = {
    severity: AlertColor
    message: string
    onDismiss?: () => void
}

export type GeolocatorShape = {
    blinking: boolean
    bigMapOpen: boolean
    flyTo?: any
    config: FeatureCongigShape
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
    backgroundColor?: string
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
