// topleft, topmiddle, topright, centered,
// bottomleft, bottommiddle, bottomright
import { gsap } from 'gsap'
import { getElement } from '../../'

export const moveTo2 = (divId, options) => {
    try {
        const el = getElement(divId);
        console.log("divId", el);
        if (!el) {
            console.warn('No element called ', divId)
            return false
        }
        gsap.set(`#${divId}`, {
            x: options.x,
            y: options.y,
            rotation: options.rotation,
            scale: options.scale,
            opacity: options.opacity,
        })
    } catch (error) {
        return false
    }
}
