export type AskOliverShape = {
    error?: any
    list?: Array<QuestionShape>|null
    asking: boolean
    asked: boolean
    fetchingList: boolean
    fetchedList: boolean
    prompt: string|null
}

export type QuestionShape = {
    fbId?: string
    data?: any
    slug?: string
    fingerprint?: string
    prompt?: string
    completion?: string
    created?: number
}
