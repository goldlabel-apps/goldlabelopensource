import {goldlabelConfig} from "../../../../goldlabelConfig"
import * as React from "react"
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
  CardHeader,
} from "@mui/material"
import {
  Font,
  Icon,
  usePwaSelect,
  selectBackoffice,
} from "../../../../goldlabel"
import {
  GameMenu,
  Collection,
  AddDoc,
  ChangeDoc,
} from "../../../Backoffice"

export default function Mobile() {
    const backoffice = usePwaSelect(selectBackoffice)
    let title: any = "Mobile"
    const {activeCollection} = backoffice


    return (
      <>
      <Container maxWidth="xs">
        <CardHeader 
          title={<Font variant="title">{title}</Font>}
        />
        <AddDoc />
        <ChangeDoc />

        <Accordion sx={{mt:1}}>
          <AccordionSummary
            expandIcon={<Icon icon="expand" />}
            aria-controls="game-menu-content"
            id="game-menu-header"
          >
            <Font>Menu</Font>
          </AccordionSummary>
          <AccordionDetails>
          <GameMenu />
          </AccordionDetails>
        </Accordion>

        { activeCollection ? <Collection  /> : null }

      </Container>
    </>
  )
}

/* 
<pre>{JSON.stringify(backoffice, null, 2)}</pre>
*/