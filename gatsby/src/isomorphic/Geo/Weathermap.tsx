import * as React from "react"
import {
  Avatar,
  CardHeader,
  CardContent,
  Box,
  LinearProgress,
  Card,
  Grid,
} from "@mui/material"
import {
  usePwaSelect,
  usePwaDispatch,
  selectPWA,
  Font,
} from "../../"
import {
  fetchStormglass,
  Param,
  Timeline,
} from "./"

export default function Weathermap(props: any) {
  const {fbId} = props
  const dispatch = usePwaDispatch()
  const pwa = usePwaSelect(selectPWA)
  const {weathermap} = pwa

  React.useEffect(() => {
    const {fetched, fetching} = weathermap
    if (!fetched && !fetching){
      dispatch(fetchStormglass(fbId)) 
    }
  }, [weathermap, fbId, dispatch])
  
  const {
    fetching,
    hourIndex,
    stormglass,
    meta,
    paramMeta,
  } = weathermap

  let params: Array<any> = []
  let hour: any = null
  if (stormglass){
    params = stormglass.meta.params
    hour = stormglass.hours[hourIndex]
  }
  // console.log("paramMeta", paramMeta)
  return (<>
             <Card>
                <Box sx={{height:4}}>
                  {fetching ? <LinearProgress /> : null }
                </Box>
                {!meta ? null : <>
                  {/* <CardHeader 
                    avatar={<Avatar 
                              src={`/svg/flags/${meta.country}.svg`}
                              alt={meta.description} />}
                    title={<Font variant="title">{meta.title}</Font>}
                    subheader={<Font variant="subheader">{meta.description}</Font>}
                  /> */}

                  <CardContent>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <Timeline />
                      </Grid>
                      { params.map((item: string, i: number) => {
                        const param = paramMeta[item]
                        if (!param) return null
                        const {visible} = param
                        if (!visible) return null
                        return <Grid key={`param_${i}`} item xs={12} md={6} lg={4}>
                                  <Param slug={item} hour={hour} />
                                </Grid>  
                      })}
                    </Grid>
                  </CardContent>
                  
                </> }
             </Card>
          </>
  )
}

/*
<pre>{JSON.stringify(weathermap, null, 2)}</pre>   
*/