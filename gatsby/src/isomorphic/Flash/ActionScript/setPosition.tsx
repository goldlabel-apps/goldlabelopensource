// topleft, topmiddle, topright, centered,
// bottomleft, bottommiddle, bottomright

import { gsap } from 'gsap'
import { getElement, getSizes } from '../../'

export type OffsetShape = {
    x?: number,
    y?: number
}

export type PositionShape = {
    divId: string
    position: string
    offset?: OffsetShape
}

export const setPosition = ({divId, position, offset}: PositionShape) => {
    try {
        console.log ("setPosition", divId)
        const el = getElement(divId)
        if (!el) {
            console.error('Movieclip missing', divId)
            return false
        }
        const sizes = getSizes(divId)
        // @ts-ignore
        const { stageW, stageH, elW, elH } = sizes
        let pos
        if (position === `topleft`)
            pos = {
                x: 0,
                y: 0,
            }
        if (position === `topmiddle`)
            pos = {
                x: stageW / 2 - elW / 2,
                y: 0,
            }
        if (position === `topright`)
            pos = {
                x: stageW - elW,
                y: 0,
            }
        if (position === `centered`)
            pos = {
                x: stageW / 2 - elW / 2,
                y: stageH / 2 - elH / 2,
            }
        if (position === `bottomleft`)
            pos = {
                x: 0,
                y: stageH - elH,
            }
        if (position === `bottommiddle`)
            pos = {
                x: stageW / 2 - elW / 2,
                y: stageH - elH,
            }
        if (position === `bottomright`)
            pos = {
                x: stageW - elW,
                y: stageH - elH,
            }

        if (position === `middleleft`)
            pos = {
                x: 0,
                y: stageH / 2 - elH / 2,
            }

        const { x, y } = pos
        gsap.set(`#${divId}`, {
            x: x,
            y: y,
        })
    } catch (error) {
        return false
    }
}
