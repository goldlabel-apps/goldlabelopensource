import * as React from "react"
import {
  Card,
  CardContent,
  CardHeader,
} from "@mui/material"
import {
  Icon,
  Font,
  usePwaDispatch,
  usePwaSelect,
  selectBackoffice,
} from "../../../core"
import {
  Forms,
} from "../../Forms"
import {
  membersForm,
} from "../../Members"

type MemberShape = {
  fbId: string
}

export default function MemberForm() {
  const dispatch = usePwaDispatch()
  const backoffice = usePwaSelect(selectBackoffice)
  const {members} = backoffice
  const {icon} = membersForm

  return <>
          <Card sx={{mb:2}}>
            <CardHeader 
              // @ts-ignore
              // avatar={<Icon icon={icon} color="primary"/>}
              title={<Font variant="title">
                {membersForm.title}
              </Font>}
              subheader={<Font variant="small">
                {membersForm.description}
              </Font>}
            />
            
            <CardContent>
                <Forms form={membersForm} />
            </CardContent>
          </Card>
        </>
}

/* 
  <pre>backoffice: {JSON.stringify(backoffice, null, 2)}</pre> 
*/
