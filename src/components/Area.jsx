import React,{useState} from "react";
import {Grid,TextField} from '@mui/material'

export const Area=()=>{
    const[height,setHeight]=useState('')
    const[width,setWidth]=useState('')

    return(
        <div className="sub">
            <Grid container>
                <Grid item xs={2}>
                    <TextField label="Height" variant="standard" onChange={(e)=>setHeight(e.target.value)}>

                    </TextField>
                </Grid>
                <Grid item xs={0.5}>
                    <h3>X</h3>
                </Grid>
                <Grid item xs={3}>
                    <TextField label="Width" variant="standard" onChange={(e)=>setWidth(e.target.value)}>

                    </TextField>
                </Grid>
                <Grid item xs={0.5}>
                    <h3>=</h3>
                </Grid>
                <Grid item>
                    <h3>{height*width}</h3>
                </Grid>

            </Grid>
        </div>
    );
}
