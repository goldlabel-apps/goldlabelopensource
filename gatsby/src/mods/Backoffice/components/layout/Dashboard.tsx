import React from "react"
import {
    Grid,
} from "@mui/material"
import {
    TopList,
} from "../../../Backoffice"

export default function Dashboard() {
    return <Grid container spacing={1}>
                {/* <Grid item xs={12} md={12}>
                    <TopList options={{
                        title: "Top Listings",
                        slug: "Listings",
                        busSlug: "topListings",
                        endpoint: `${process.env.REACT_APP_API}listings`,
                        icon: "listings",
                    }}/>
                </Grid> */}

                <Grid item xs={12} md={12}>
                    <TopList options={{
                        title: "Top Tings",
                        slug: "Tings",
                        busSlug: "topTings",
                        endpoint: `${process.env.REACT_APP_API}tings`,
                        icon: "tings",
                    }}/>
                </Grid>
            </Grid>
}
