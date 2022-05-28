import { Grid, TextField } from "@mui/material";
import React, { useState } from "react";

export const Even=()=>{
    const[num,setNum]=useState('');

    return(
        <Grid container>

            <Grid item xs={2}>
                <TextField label="Your Number" variant="standard" onChange={(e)=>setNum(e.target.value)}>

                </TextField>
            </Grid>
            <Grid item>
                <h3>{num/2}</h3>
            </Grid>
        </Grid>
    );
}