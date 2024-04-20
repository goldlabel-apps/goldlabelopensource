import { ReactNode } from "react"

export type PositionShape = {
    divId: string
    position: string
}

export interface StageProps {
    id: string
    children: ReactNode
}

export type OffsetShape = {
    x?: number,
    y?: number
}
