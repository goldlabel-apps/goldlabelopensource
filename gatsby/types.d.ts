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
  localeList: any
  localeMeta: any
  themes: Array<ThemeShape>
}

export type ThemeShape = {
  title?: string
  slug: string
  primaryColor: string
  secondaryColor: string
  backgroundColor?: string
  font?: string
}