// topleft, topmiddle, topright, centered,
// bottomleft, bottommiddle, bottomright
import { gsap } from "gsap";
import { getElement, getSizes } from "../../";

export const setPosition = (divId: string, stageClip: string, position: string, options?: any) => {
    try {
        const el = getElement(divId);
        if (!el) {
            console.warn('No element called ', divId)
            return false
        };
        const sizes = getSizes(divId, stageClip);
        // console.log("sizes", sizes);
        // @ts-ignore
        const { stageW, stageH, elW, elH } = sizes;
        let divPosition = "centered";
        if (position) divPosition = position;
        let l = 0;
        let t = 0;
        let r = 0;
        let o = 0;
        if (options.opacity) o = options.opacity;
        if (options.left) l = options.left;
        if (options.top) t = options.top;
        if (options.rotation) r = options.rotation;
        let pos;
        if (divPosition === `topleft`)
            pos = {

                x: 0,
                y: 0,
            }
        if (divPosition === `topmiddle`)
            pos = {
                x: stageW / 2 - elW / 2,
                y: 0,
            }
        if (divPosition === `topright`)
            pos = {
                x: stageW - elW,
                y: 0,
            }
        if (divPosition === `centered`)
            pos = {
                x: stageW / 2 - elW / 2,
                y: stageH / 2 - elH / 2,
            }
        if (divPosition === `bottomleft`)
            pos = {
                x: 0,
                y: stageH - elH,
            }
        if (divPosition === `bottommiddle`)
            pos = {
                x: stageW / 2 - elW / 2,
                y: stageH - elH,
            }
        if (divPosition === `bottomright`)
            pos = {
                x: stageW - elW,
                y: stageH - elH,
            }
        const { x, y } = pos;

        gsap.set(`#${divId}`, {
            x: x + l,
            y: y + t,
            rotation: r,
            scale: options.scale,
            opacity: o,
        })
    } catch (error) {
        return false
    }
}
