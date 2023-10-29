import {LinguaShape} from "./Lingua/types"

export type PluginsShape = {
    geolocator: any
    lingua: LinguaShape
    tings: any
}

type HostShape = {
    label: string
    host: string
    url: string
    icon: string
    onClick: any
}