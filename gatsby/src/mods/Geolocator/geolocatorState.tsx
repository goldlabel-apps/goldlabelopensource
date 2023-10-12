import {GeolocatorShape} from "../../../types"
import {goldlabelConfig} from "../../goldlabelConfig"

export const geolocatorState: GeolocatorShape = {
    blinking: false,
    bigMapOpen: false,
    flyTo: null,
    config: goldlabelConfig.features.geolocator
}
