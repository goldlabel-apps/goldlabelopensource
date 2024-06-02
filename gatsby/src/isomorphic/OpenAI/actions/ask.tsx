import OpenAI from "openai"
import { 
  notify,
  store,
} from "../../../goldlabel"
import {
  save,
} from "../"

export const ask = (
  prompt: string
): any =>
  async (dispatch: any) => {
    try {
      const {uid, name, avatar} = store.getState().fingerprint.data
      const chat = {
        created: Date.now(),
        updated: Date.now(),
        uid,
        name,
        avatar,
        prompt,
        completion: {}
      }
      const openai = new OpenAI({
        apiKey: process.env.REACT_APP_OPENAI,
        dangerouslyAllowBrowser: true,
      })
      chat.completion = await openai.chat.completions.create(
        {
          messages: [{ 
            role: 'user', 
            content: prompt,
          }],
          model: 'gpt-3.5-turbo',
        }
      )
      dispatch(save(chat))
    } catch (e: any) {
      dispatch(notify("ask 500", "error", e.toString()))
    }
}
