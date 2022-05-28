import React,{useState} from "react";
import {TextField,Grid} from '@mui/material'

export const Multi =()=>{

    const[firstnum,setFirstnum]=useState(0)
    const[secondtnum,setSecondnum]=useState(0)

    return(
        <div className="sub">
            <Grid container>
                <Grid item xs={2}>
                    <TextField
                      id=""
                      label="First Number"
                      variant="standard"
                      onChange={(e)=>setFirstnum(e.target.value)}
                    />
                </Grid>
                <Grid item>
                    <h3>X</h3>
                </Grid>  
                <Grid item xs={1}/>
                    <TextField
                      id=""
                      label="Second Number"
                      variant="standard"
                      onChange={(e)=>setSecondnum(e.target.value)}
                    />
                    <Grid item xs={0}>
                        <h3>=</h3>
                </Grid>
                <Grid item xs={0}>
                <h3>{firstnum * secondtnum}</h3>    
                </Grid>
                
            </Grid>
        </div>
    );
}