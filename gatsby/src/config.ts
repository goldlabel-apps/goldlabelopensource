export type GoldlabelConfig = {
    version: string
    isomorphic: any
    siteUrl: string
    siteIcon: string
    siteRepo: string
    siteAvatar: string
    siteTitle: string
    siteDescription: string
    siteEmail: string
    siteDisplayname: string
}

export const glConfig: any = {
    siteTitle: "Goldlabel",
    version: "4.3.0",
    siteDisplayname: "AI",
    siteEmail: "ai@goldlabel.pro",
    siteUrl: "https://free.goldlabel.pro",
    siteIcon: "/svg/iOS.svg",
    siteImage: "/webp/coupland/coupland.webp",
    siteRepo: "https://github.com/listingslab-software/goldlabelopensource",
    siteAvatar: "https://free.goldlabel.pro/svg/iOS.svg",
    siteDescription: "Free & Open Source on Github",
    siteFacebook: "https://www.facebook.com/goldlabelapps",
    siteKeywords: "listingslab, Goldlabel, Open Source, Free, Github",
    siteTwitter: "@listingslab",
    siteTheme: "#FFFFFF",
    isomorphic: {
        forms: { enabled: false },
        lingua: { enabled: false },
        flash: { 
            enabled: true,
            hero: false,
            scenes: [
                "ReinventingFlash",
                "NewScene",
            ],
        },
        fingerprint: { 
            enabled: true,
            toggle: true,
        },
        theme: {
            enabled: true,
            paletteMode: "dark",
            font: "noka",
            color: "#C09F52",
            primaryColor: "#C09F52",
            secondaryColor: "#FFF",
        },
        geo: {
            enabled: false,
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
