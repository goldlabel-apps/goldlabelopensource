export interface OpenAIProps {
    slug: string
    prompt: string
    chats: Array<any> | null
}

export const openaiSlice: OpenAIProps = {
    slug: "openai",
    prompt: "",
    chats: []
}
