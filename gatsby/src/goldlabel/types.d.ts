export type Config = {
    version: string
    siteUrl: string
    siteTitle: string
    siteDescription: string
    siteKeywords: string
    siteDisplayname: string
    siteEmail: string
    siteIcon: string
    siteImage: string 
    siteAvatar: string    
    siteRepo: string
    siteTheme: string
    isomorphic: any
}

export type Core = {
    user: any
    // ...
}

export type KeyValueShape = {
    key: string
    value: any
}
