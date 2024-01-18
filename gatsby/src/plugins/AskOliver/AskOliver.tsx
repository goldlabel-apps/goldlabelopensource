import * as React from "react"
import {QuestionShape} from "./types"
import {
  LinearProgress,
  Box,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Avatar,
  IconButton,
} from "@mui/material"
import {
  Icon,
  Font,
  usePwaSelect,
  usePwaDispatch,
  selectAskOliver,
} from "../../core"
import {
  AskOliverError,
  AutoPrompt,
  fetchList,
  reset,
  ask,
} from "./"

export default function AskOliver() {
  let promptFound = false
  let completionFound = false
  let completionMarkdown = null
  const dispatch = usePwaDispatch()
  const askoliver = usePwaSelect(selectAskOliver)
  const {
    fetchingList,
    error,
    list,
    prompt,
  } = askoliver

  const askNow = () => {
    dispatch(ask())
  }

  const qs: Array<QuestionShape> = []
  
  if (list){
    for ( let i=0; i < list.length; i++){
      const q: QuestionShape = {
        fbId: list[i].fbId,
        data: list[i].data,
      }
      qs.push(q)
    }
  }
  
  if(qs.length){
    if (prompt){
      promptFound = true
      for (let i=0; i<list.length; i++){
        const {data} = list[i]
        if (prompt === data.prompt){
          completionFound = true
          completionMarkdown = data.completion
        }
      }
    }
  }

  React.useEffect(() => {
    const {
      fetchedList,
      fetchingList,
    } = askoliver
    if (!fetchedList && !fetchingList) dispatch(fetchList())
  }, [askoliver])

  if (error) return  <AskOliverError />

  return (
    <>
      {fetchingList ? <LinearProgress /> : <Box sx={{height: 4}} />}
      
      <Box>
        <CardHeader 
          avatar={<IconButton>
            <Icon icon="oliver" />
          </IconButton>}
          title={<Font variant="title">Ask Oliver</Font>}
          subheader={<Font variant="small">He's Artificially Intelligent. Not psychic</Font>}
        />
        <CardContent>

        </CardContent>
        <CardActions>
          <Button
            variant="outlined"
            color="secondary"
            onClick={askNow}>
          <Font>
            Ask Oliver
          </Font>
        </Button>
        </CardActions>
      </Box>
      
       
    </>
  )
}
