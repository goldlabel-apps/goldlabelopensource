import { gsap, Power1 } from "gsap";
import { getElement, getSizes } from "../../";

export type AnimationOptions = {
    left?: number;
    top?: number;
    scale?: number;
    scaleX?: number;
    scaleY?: number;
    rotation?: number;
    duration?: number; // in secs
    opacity?: number | null;
    easing?: string; 
}

export const animateTo = (divId: string, stageClip: string, position:string, options:AnimationOptions, onComplete?: any) => {
    try {
        const el = getElement(divId)
        if (!el) {
            console.warn('No element named ', divId);
            return false;
        }
        let oC = () => {}
        if (onComplete) oC = onComplete;
        let l = 0;
        let e = Power1.easeOut;
        let t = 0;
        let r = 0;
        let d = 1;
        let s = 1;
        let sX = 1;
        let sY = 1;
        let o = 0;
        if (options.scale) s = options.scale;
        if (options.scaleX) sX = options.scaleX;
        if (options.scaleY) sY = options.scaleY;
        if (options.left) l = options.left;
        if (options.top) t = options.top;
        if (options.rotation) r = options.rotation;
        if (options.duration) d = options.duration;
        if (options.opacity) o = options.opacity;
        if (options.easing) {
            if (options.easing === "in")
            e = Power1.easeIn;
        };
        const sizes = getSizes(divId, stageClip);
        // @ts-ignore
        const { stageW, stageH, elW, elH } = sizes;
        let divPosition = "centered";
        if (position) divPosition = position;
        let pos = {x: 0,y: 0};
        if (divPosition === `topleft`)
            pos = {x: 0,y: 0}
        if (divPosition === `topmiddle`)
            pos = {x: stageW / 2 - elW / 2,y: 0}
        if (divPosition === `topright`)
            pos = {x: stageW - elW,y: 0}
        if (divPosition === `centered`)
            pos = {x: stageW / 2 - elW / 2, y: stageH / 2 - elH / 2}
        if (divPosition === `bottomleft`)
            pos = {x: 0, y: stageH - elH}
        if (divPosition === `bottommiddle`)
            pos = {x: stageW / 2 - elW / 2, y: stageH - elH}
        if (divPosition === `bottomright`)
            pos = {x: stageW - elW,y: stageH - elH };  
        gsap.to(`#${divId}`, {
            opacity: o,
            x: pos.x + l,
            y: pos.y + t,
            rotation: r,
            scaleX: sX,
            scaleY: sY,
            scale: s,
            duration: d,
            ease: e,
            onComplete: oC,
        })
    } catch (error) {
        // console.warn("animateTo", error)
        return false
    }
}
