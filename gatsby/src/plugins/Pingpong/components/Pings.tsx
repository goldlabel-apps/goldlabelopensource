import * as React from "react"
// import moment from "moment"
import {
  Avatar,
  Box,
  Tooltip,
} from "@mui/material"
import { 
  DataGrid,
  GridRenderCellParams,
  GridValueGetterParams,
} from "@mui/x-data-grid"
import {
  Font, 
  selectCore, 
  usePwaSelect,
  usePwaDispatch,
  selectBackoffice,
  selectDisplay,
  Device,
} from "../../../core"
import {
  iconFromHost,
} from "../../Pingpong"
import { setBackofficeKey } from "../../Backoffice"

export default function Pings({data}: any) {
  const dispatch = usePwaDispatch()
  const core = usePwaSelect(selectCore)
  const backoffice = usePwaSelect(selectBackoffice)
  const display = usePwaSelect(selectDisplay)

  const onFbIdSelect = (fbId: string|null) => {
    dispatch(setBackofficeKey("fbId", fbId))
  }

  const {allHosts} = core
  let isBig = false
  if (display) isBig = !display.mobile
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
        <Tooltip title={`${params.row.city} ${params.row.countryName}`}>
          <Avatar sx={{width: "22px", height: "22px", }} src={`/svg/flags/${params.row.flag}.svg`} />
        </Tooltip>
      ),
    },
    {
      field: 'host',
      headerName: '',
      sortable: true,
      width: 40,
      renderCell: (params: GridValueGetterParams) => {
        return  (<Tooltip title={params.row.host} id={params.row.fbId}>
                  <Avatar 
                    sx={{width: "28px", height: "28px", }} 
                    src={iconFromHost(params.row.host, allHosts)} />
                </Tooltip>)
      },
    },

    {
      field: 'device',
      headerName: '',
      width: 160,
      sortable: true,
      renderCell: (params: GridRenderCellParams<any, Date>) => (
        <Device 
          osName={params.row.osName} 
          browserName={params.row.browserName} 
          vendor={params.row.vendor}
        />
      ),
    },
    {
      field: 'hits',
      headerName: '',
      width: 50,
      sortable: true,
      renderCell: (params: GridRenderCellParams<any, Date>) => (
        <Font variant="small">{params.row.hits || ""}</Font>
      ),
    },

    // {
    //   field: 'updated',
    //   headerName: 'Last seen',
    //   sortable: true,
    //   width: 125,
    //   renderCell: (params: GridRenderCellParams<any, Date>) => (
    //     <Font variant="small">{`${moment(params.row.updated).fromNow() || ""}`}</Font>
    //   ),
    // },
    
    // {
    //   field: 'latitude',
    //   headerName: 'latitude',
    //   sortable: true,
    //   renderCell: (params: GridRenderCellParams<any, Date>) => (
    //     <Font variant="small">{params.row.latitude || ""}</Font>
    //   ),
    // },

    {
      field: 'docTitle',
      headerName: '',
      sortable: true,
      width: 190,
      renderCell: (params: GridRenderCellParams<any, Date>) => (
        <Font variant="small">{params.row.docTitle || ""}</Font>
      ),
    },
    
    

    
  ]
  if (!data) return null
  for (let i = 0; i <data.length; i++){
    const {
      city,
    } = data[i]
    if (city === "Mountain View") break
    docs.push({
      id: data[i].fbId,
      time: data[i].time,
      ...data[i],
    })
  }
  const sortedArr = [...docs].sort((a, b) => b.time - a.time);

  return (<>
      <Box sx={{ width: "100%", pb: "100px" }}>
        <DataGrid
          checkboxSelection={false}
          rows={sortedArr}
          columns={cols}
          onRowSelectionModelChange={(row) => {
            const fbId: any = row[0]
            onFbIdSelect(fbId)
          }} />
      </Box>
    </>
  )
}


