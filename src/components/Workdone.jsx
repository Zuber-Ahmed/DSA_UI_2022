import { Grid, TextField } from "@mui/material";
import React, { useState } from "react";

export const Workdone=()=>{
    const[force,setForce]=useState('');
    const[dis,setDis]=useState('');

    return(
        <div className="sub">
          <Grid container>
              <Grid item xs={2}>
              <TextField label="Force" variant="standard" onChange={(e)=>setForce(e.target.value)}>
                </TextField>
              </Grid>

              <Grid item xs={.5}>
                  <h3>X</h3>
              </Grid>
              <Grid item xs={2}>
              <TextField label="Displacement" variant="standard" onChange={(e)=>setDis(e.target.value)}/>
              </Grid>
              <Grid item>
                  <h3>=</h3>
              </Grid>
              <Grid item>
                  <h3>{force*dis}</h3>
              </Grid>
            </Grid>  
        </div>
    );
}