import React from "react"
import { 
  getFirestore,
  onSnapshot,
  collection, 
  query,
  orderBy,
} from "firebase/firestore"
import {Box} from "@mui/material"
import {
  usePwaSelect,
  usePwaDispatch,
  selectOpenai,
} from "../../goldlabel"
import {
  Chat,
  setOpenaiKey,
} from "../OpenAI"

export default function OpenAI(props: any) {
  const dispatch = usePwaDispatch()
  const o = usePwaSelect(selectOpenai)
  const {chats} = o

  React.useEffect(() => {
    const q = query(collection(getFirestore(), "openai"), orderBy("updated", "desc"))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const chats: any = []
      querySnapshot.forEach((doc) => {
        chats.push({
          fbId: doc.id,
          ...doc.data(),
        })
      })
      dispatch(setOpenaiKey("chats", chats))
    })
    return () => unsubscribe()
  }, [dispatch])

  return <Box sx={{}}>
    {chats ? <>
      {chats.map((item: any, i:number) => {
        // const {} = item
        return <Chat key={`chat_${i}`} data={item} />
      })}
    </> : null }
  </Box>
}

/*
<pre>prompt: {JSON.stringify(item.prompt, null, 2)}</pre>
*/
                