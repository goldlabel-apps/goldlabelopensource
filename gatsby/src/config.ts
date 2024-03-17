export type GoldlabelConfig = {
    version: string
    isomorphic: any
    siteUrl: string
}

export const glConfig: any = {
    version: "4.2.6",
    siteUrl: "https://free.goldlabel.pro",
    siteIcon: "/svg/iOS.svg",
    siteRepo: "https://github.com/listingslab-software/goldlabelopensource",
    siteAvatar: "https://free.goldlabel.pro/svg/iOS.svg",
    siteTitle: "Goldlabel.",
    siteDescription: "Free & Open Source on Github",
    siteEmail: "ai@goldlabel.pro",
    siteDisplayname: "Goldlabel",
    siteFacebook: "https://www.facebook.com/goldlabelapps",
    siteKeywords: "listingslab, Goldlabel, Open Source, Free, Github",
    siteImage: "/webp/coupland/coupland.webp",
    siteTwitter: "@listingslab",
    siteTheme: "#FFFFFF",
    isomorphic: {
        forms: { enabled: false },
        lingua: { enabled: false },
        flash: { enabled: true },
        fingerprint: { enabled: true },
        theme: {
            enabled: true,
            paletteMode: "dark",
            font: "noka",
            color: "#C09F52",
            primaryColor: "#C09F52",
            secondaryColor: "#FFF",
        },
        geo: {
            enabled: true,
            lightTheme: "mapbox://styles/listingslab/clmrnpplw00ej01nsfv8l4q25",
            darkTheme: "mapbox://styles/listingslab/clmrnt68o02a801qxevn0bt6u",
            default: {
                lat: 35,
                lng: 14,
                zoom: 8,
                label: "Hello World"
            }
        },
    },
    
}
