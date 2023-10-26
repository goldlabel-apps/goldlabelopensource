type BackofficeShape = {
    tingsSubscribed: boolean;
}
type LinguaShape = {
    locale: string;
}
type PluginsShape = {
    backoffice: BackofficeShape;
    lingua: LinguaShape;
}

export const pluginsState: PluginsShape = {
    backoffice: {
        tingsSubscribed: false,
    },
    lingua: {
        locale: "pi",
    }
}
