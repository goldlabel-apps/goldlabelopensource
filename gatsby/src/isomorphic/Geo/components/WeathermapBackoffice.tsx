import React from "react"
import {
  Box,
  Button,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  CardHeader,
} from "@mui/material"
import {
  usePwaDispatch,
  usePwaSelect,
  selectPWA,
  Font,
  Icon,
  navigate,
} from "../../../"
import {
  updateDoc,
  cancelEdit,
  docDelete,
  //toggleConfirming,
} from "../../../packages/Backoffice"
import {
  patchStormglass,
} from "../../Weathermap"

export default function WeathermapBackoffice() {
  const pwa = usePwaSelect(selectPWA)
  const {backoffice} = pwa
  // @ts-ignore
  const {edit} = backoffice
  const {fbId, collection, docFetch} = edit
  const {doc} = docFetch
  const dispatch = usePwaDispatch()
  return (<>
      <Accordion>
        <AccordionSummary
          expandIcon={<Icon icon="expand" />}
          id="weathermap-preview"
        >
           <CardHeader
              title={<Font>
                     Weathermap Preview
                    </Font>}
            />
        </AccordionSummary>
        <AccordionDetails>
          <pre>{JSON.stringify(docFetch, null, 2)}</pre>
        </AccordionDetails>
      </Accordion>

      <Box sx={{my: 2}}>

        <IconButton
          color="secondary"
          onClick={() =>{
            dispatch(cancelEdit(collection))
          }}>
          <Icon icon="cancel" />
        </IconButton>

        <IconButton
          color="secondary"
          onClick={() =>{
            // dispatch(toggleConfirming(true))
            dispatch(docDelete(fbId, collection, doc))
          }}>
          <Icon icon="delete" />
        </IconButton>

        <IconButton
          color="secondary"
          onClick={() =>{
            dispatch(navigate(`${process.env.REACT_APP_API}weathermap/stormglass/${fbId}`, "_blank"))
          }}>
          <Icon icon="code" />
        </IconButton>

        <IconButton
          color="secondary"
          onClick={() =>{
            // console.log("forecast")
            dispatch(patchStormglass(fbId))
          }}>
          <Icon icon="weathermap" />
        </IconButton>

        <IconButton
          color="secondary"
          onClick={() =>{
            dispatch(updateDoc(fbId, collection))
          }}>
          <Icon icon="save" />
        </IconButton>

        

      </Box>
            
      </>)
}
