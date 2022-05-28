import React, { useState } from "react";
import {Grid,TextField} from '@mui/material'

export const Mileag=()=>{
    const [mileage,setMilage]=useState(0)
    const [distance,setDistance]=useState(0)
    const [cost,setCost]=useState(0)

    return(
        <div className="sub">
            <Grid container spacing={2}>
            <Grid item sx={3}>
                <TextField variant="outlined" label="Mileage"type={"number"} onChange={(e)=>setMilage(e.target.value)}/>
            </Grid>
            <Grid item sx={3}>
                <TextField variant="outlined" type={"number"} label="Distance" onChange={(e)=>setDistance(e.target.value)}/>
            </Grid>
            <Grid item sx={3}>
                <TextField variant="outlined" type={"number"} label="Cost of Fuel" onChange={(e)=>setCost(e.target.value)}/>
            </Grid>
            <Grid item sx={1}>
                <h2><span>Total Cost</span>{Math.round((distance/mileage)*cost).toFixed(3)}</h2>
            </Grid>
            </Grid>
        </div>
    );
}