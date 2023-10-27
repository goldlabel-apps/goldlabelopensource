type HostShape = {
    label: string
    host: string
    url: string
    icon: string
    onClick: any
}
type BackofficeShape = {
    selectedHosts: Array<HostShape>
}
type LinguaShape = {
    locale: string
}
type PluginsShape = {
    backoffice: BackofficeShape
    lingua: LinguaShape
}

export const pluginsState: PluginsShape = {
    backoffice: {
        selectedHosts: [
            {
                label: "Legalweed",
                host: "legalweed.world",
                url: "https://legalweed.world/",
                icon: "https://legalweed.world/svg/iOS.svg",
                onClick: () => {
                    console.log("legalweed.world")
                },
            },
        ],
    },
    lingua: {
        locale: "pi",
    }
}
