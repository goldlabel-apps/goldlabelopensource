import React from "react"
import {
    Card,
    CardHeader,
    CardActionArea,
    IconButton,
    LinearProgress,
} from "@mui/material"
import {
    Font,
    Icon,
    usePwaDispatch,
    usePwaSelect,
    selectBackoffice,
} from "../../../goldlabel"
import {
    newBus,
    fetchAPI,

    selectCollection,
} from "../../Backoffice"

export default function TopList(props: any) {
    const {options} = props
    const {
        title,
        slug,
        icon,
        busSlug,
        endpoint,
    } = options
    const dispatch = usePwaDispatch()
    const refresh = () =>  dispatch(newBus(busSlug, endpoint))
    const backoffice = usePwaSelect(selectBackoffice)
    const {bus} = backoffice

    React.useEffect(() => {
        const thisBus = bus[busSlug]
        if (thisBus){
            const {
                fetching, 
                fetched,
                endpoint,
            } = thisBus
            if (!fetching && !fetched) {
                // console.log("endpoint", endpoint)
                // dispatch (fetchAPI(slug, endpoint))
            }
        } else {
            dispatch (newBus(busSlug, endpoint))
        }


        // if (!thisBus){
        //     dispatch (newBus(busSlug, endpoint))

        // } else {

        //      dispatch(fetchAPI(slug, endpoint))
        //     let sinceLast = 0
        //     if (lastFetched !== 0) sinceLast =(Date.now() - lastFetched)/1000
        //     if (sinceLast > 30) console.log("since update", sinceLast)
        // }
    }, [bus, dispatch])

    const thisBus = bus[busSlug]
    let data: any = null
    if(thisBus) data = thisBus.data
    let list = []
    if (data) list = data.list
    let fetching = false
    if(thisBus) fetching = thisBus.fetching
    
    return (<>
                <Card sx={{}}>
                    <CardHeader 
                        avatar={<IconButton
                                    color="primary" 
                                    onClick={() => {
                                        dispatch(selectCollection(slug, thisBus.busSlug))
                                    }}>
                                    <Icon icon={icon} />
                                </IconButton>}
                        title={<Font variant="title">
                                    {title}
                                </Font>}
                        action={<IconButton
                                    color="primary" 
                                    onClick={refresh}>
                                    <Icon icon="refresh" />
                                </IconButton>}
                    />  
                    {fetching ? <LinearProgress /> : null }
                    {list ? <>
                        {list.map((item: any,i: number) => {
                            const {data} = item
                            const {
                                slug,
                                host,
                                location,
                            } = data
                            if (i>3) return null
                            return <CardActionArea key={`ting_${i}`}>
                                        <CardHeader 
                                            title={<Font>
                                                    {host} {slug}
                                                    </Font>}
                                            subheader={<Font variant="small">
                                                        {location}
                                                        </Font>}
                                        />
                                    </CardActionArea>
                        })}
                    </> : null }
                    <pre>thisBus: {JSON.stringify(thisBus, null, 2)}</pre>
                </Card>
            </>)
}

/*
<pre>thisBus: {JSON.stringify(thisBus, null, 2)}</pre>
*/