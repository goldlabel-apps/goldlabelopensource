import React from "react"
import {
Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
} from "@mui/material"
import {
  Font,
} from "../../"

export default function Contact() {

  return (<>
            <Box sx={{m:1}}>
                
                    <CardHeader 
                        avatar={<Avatar src={"/png/pimoroni/logo.png"} />}
                        title={<Font variant="title">
                                Pimoroni EnviroGrow
                            </Font>}
                        subheader={<Font>
                            £39
                        </Font>}
                    />
                    <CardContent>
                        <Grid container>
                            <Grid item xs={12} md={6}>
                                <CardMedia 
                                    component={"img"}
                                    height={200}
                                    src={"/png/pimoroni/board.webp"}
                                    alt={"pimoroni"}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                            <Button
                                sx={{mt:2}}
                                fullWidth
                                variant="contained"
                                onClick={() => {
                                    window.open("https://shop.pimoroni.com/products/enviro-grow?variant=40055904305235", "_blank")
                                }}>
                                Buy Now
                            </Button>
                            </Grid>
                        </Grid>
                    
                    </CardContent>
                    
                
            </Box>
          </>)
}
