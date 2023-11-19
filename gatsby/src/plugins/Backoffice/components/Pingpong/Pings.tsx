import * as React from "react"
import moment from "moment"
import {
  Avatar,
  Button,
  Box,
  Dialog,
  DialogContent,
  DialogActions,
} from "@mui/material"
import { 
  DataGrid,
  GridValueGetterParams,
  GridRenderCellParams,
} from "@mui/x-data-grid"
import {
  Icon,
  Font, 
  selectCore, 
  usePwaSelect,
  usePwaDispatch,
  selectBackoffice,
  selectDisplay,
} from "../../../../core"
import {
  updateFbId,
  Ping,
} from "../../../Backoffice"

const iconFromHost = (
  host: string, 
  allHosts: any,
) => {
  for (let i=0; i<allHosts.length; i++){
    if(host === allHosts[i].host) return allHosts[i].icon
  }
  return "/svg/hosts/opensourceLabel.svg"
}

export default function Pings({data}: any) {
  const dispatch = usePwaDispatch()
  const core = usePwaSelect(selectCore)
  const {allHosts} = core
  const backoffice = usePwaSelect(selectBackoffice)
  const display = usePwaSelect(selectDisplay)
    let isBig = false
    if (display) isBig = !display.mobile
  
  const onFbIdSelect = (fbId: string|null) => {
    dispatch(updateFbId(fbId))
  }

  const {fbId} = backoffice
  let selected = false
  if (fbId) selected = true

  let docs: any = []
  let cols: any = [  
    {
      field: 'flag',
      headerName: '',
      sortable: true,
      width: 40,
      renderCell: (params: GridRenderCellParams<any, Date>) => (
        <Avatar sx={{width: "22px", height: "22px", }} src={`/svg/flags/${params.row.flag}.svg`} />
      ),
    },
    {
      field: 'host',
      headerName: '',
      sortable: true,
      width: 40,
      renderCell: (params: GridValueGetterParams) => {
        return  (<Avatar sx={{width: "28px", height: "28px", }} src={iconFromHost(params.row.host, allHosts)} />)
      },
    },
    {
      field: 'browser',
      headerName: '',
      sortable: true,
      renderCell: (params: GridRenderCellParams<any, Date>) => (
        <Font variant="small">{`${params.row.browser}`}</Font>
      ),
    },

    {
      field: 'os',
      headerName: '',
      sortable: true,
      renderCell: (params: GridRenderCellParams<any, Date>) => (
        <Font variant="small">{`${params.row.os}`}</Font>
      ),
    },

    {
      field: 'device',
      headerName: '',
      sortable: true,
      renderCell: (params: GridRenderCellParams<any, Date>) => (
        <Font variant="small">{`${params.row.deviceVendor} ${params.row.deviceModel || ""}`}</Font>
      ),
    },

    // {
    //   field: 'hostname',
    //   headerName: '',
    //   sortable: true,
    //   renderCell: (params: GridRenderCellParams<any, Date>) => (
    //     <Font variant="small">{params.row.host}</Font>
    //   ),
    // },
    // {
    //   field: 'city',
    //   headerName: '',
    //   sortable: true,
    //   renderCell: (params: GridRenderCellParams<any, Date>) => (
    //     <Font variant="small">{params.row.city}</Font>
    //   ),
    // },
    // {
    //   field: 'slug',
    //   headerName: '',
    //   sortable: true,
    //   renderCell: (params: GridRenderCellParams<any, Date>) => (
    //     <Font variant="small">{`${params.row.slug}`}</Font>
    //   ),
    // },
  ]
  if (!data) return null
  for (let i = 0; i <data.length; i++){
    // if (i === 0) console.log ("data[i]", data[i])
    docs.push({
      id: data[i].fbId,
      time: data[i].time,
      ...data[i],
    })
  }
  const sortedArr = [...docs].sort((a, b) => b.time - a.time);

  return (<>
      <Dialog 
        open={selected}
        fullWidth
        fullScreen
        onClose={() => {
          onFbIdSelect(null)
        }}
      >
        <DialogContent>
          <Ping />
        </DialogContent>
        
        <DialogActions>
          
          <Button
            color="secondary"
            onClick={(e: React.MouseEvent) => {
              e.preventDefault()
              onFbIdSelect(null)
            }}>
              <Font variant="small">
                Close
              </Font>
              <Box sx={{mt:0.5, ml:1}}>
                <Icon icon="close" />
              </Box>
          </Button>
        </DialogActions>

      </Dialog>

      <Box sx={{ width: "100%", pb: "100px" }}>
        <DataGrid
          checkboxSelection={false}
          rows={sortedArr}
          columns={cols}
          onRowSelectionModelChange={(row) => {
            const fbId: any = row[0]
            onFbIdSelect(fbId)
          }}
          
        />
      </Box>
    </>
  )
}
