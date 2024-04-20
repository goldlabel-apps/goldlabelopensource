// import { ReactNode } from "react"

export interface MessageProps {
    time: number
    from: string
    message: string
}

export interface FingerprintProps {
    slug: string
    mode: "subscribe" | "debug" | "icon" | "hidden"
    open: boolean
    making: boolean
    made: boolean
    messages: Array<MessageProps> | null
    checking: boolean
    checked: boolean
    exists: boolean
    data: any
    subscribed: any
    fingerprints: any
}