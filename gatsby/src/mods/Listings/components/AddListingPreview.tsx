import * as React from 'react'
import {
  Card,
  CardHeader,
  CardContent,
} from "@mui/material"
import {
  Icon,
  Font,
  usePwaSelect,
  selectPWA,
} from "../../../goldlabel"

export default function AddListingPreview () {
  let valid = false
  const pwa = usePwaSelect(selectPWA)
  const {listings} = pwa
  const {addListing} = listings
  if (!addListing) return null
  const {
    add_listing_name,
    add_listing_email,
    add_listing_facebook,
    add_listing_image,
    validation,
  } = addListing
  if (validation){
    valid = validation.valid
  }
  return (
      <>
        <Card>
          <CardHeader
            title={<Font variant="title">
                    {add_listing_name === "" ? "Business name" : add_listing_name}
                  </Font>}
            action={<Icon icon={!valid ? "warning" : "tick"} color="primary"/>}
          />
          <CardContent>
          {add_listing_email ? <>
              <Font variant="small">
                Email: {add_listing_email}
              </Font>
            </> : null}

            {add_listing_image ? <>
              <Font variant="small">
                Image: {add_listing_image}
              </Font>
            </> : null}


            {add_listing_facebook ? <>
              <Font variant="small">
                Facebook: {add_listing_facebook}
              </Font>
            </> : null}
          </CardContent>
        </Card>
    </>
  );
}

/* 
<pre>addListing: {JSON.stringify(addListing, null, 2)}</pre> 
*/
