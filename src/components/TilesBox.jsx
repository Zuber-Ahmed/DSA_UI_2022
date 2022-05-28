import React, { useState } from "react";
import { Grid, TextField } from "@mui/material";
import { fontWeight, style } from "@mui/system";

export const TilesBox=()=>{
    const[widthOfHall,setWidthOfHall]=useState(0)
    const[heightOfHall,setHeightOfHall]=useState(0)
    const[tilesWidth,setTilesWidth]=useState(0)
    const[tilesHeight,setTilesHeight]=useState(0)
    const[tilesbox,setTilesBox]=useState(0)
    const[costofbox,setCostOfBox]=useState(0)
    const[nfloor,setnFloors]=useState(0)
    const[numberofbuilding,setNumberofBuilding]=useState(0)
    const calculateBoxes=()=>{
            const areaOfHall = widthOfHall* heightOfHall;
            const areaOfTile = tilesHeight* tilesWidth;
            const totalNumberOfTiles = areaOfHall/areaOfTile;
            const tileBoxes = totalNumberOfTiles /tilesbox;

            return Math.round((tileBoxes || 0));
    }

    return (
        <div className="sub">
            <Grid container spacing={1}>
                <Grid item sx={2}>
                    <TextField variant="outlined" label="Width of Hall" onChange={(e)=>setWidthOfHall(e.target.value)}/>
                </Grid>
                <Grid item sx={2}>
                    <TextField variant="outlined" label="Height of Hall" onChange={(e)=>setHeightOfHall(e.target.value)}/>
                </Grid>
                <Grid item sx={2}>
                    <TextField variant="outlined" label="Tile's of Width" onChange={(e)=>setTilesWidth(e.target.value)}/>
                </Grid>
                <Grid item sx={2}>
                    <TextField variant="outlined" label="Tile's of Height" onChange={(e)=>setTilesHeight(e.target.value)}/>
                </Grid>
                <Grid item sx={2}>
                    <TextField variant="outlined" label="Tile's in a Box" onChange={(e)=>setTilesBox(e.target.value)}/>
                </Grid>
                <Grid item sx={2}>
                    <TextField variant="outlined" label="Cost of Box" onChange={(e)=>setCostOfBox(e.target.value)}/>
                </Grid>
                <Grid item>
                    <TextField label="Number of Floors" variant="outlined" onChange={e=>setnFloors(e.target.value)}/>
                </Grid>
                <Grid item>
                    <TextField label="Number of Apartment" variant="outlined" onChange={e=>setNumberofBuilding(e.target.value)}/>
                </Grid>
                <Grid container spacing={3}>
                <Grid item sx={1}>
                    <h3>Total Boxes:{calculateBoxes()}</h3>
                </Grid>
                <Grid item sx={2}>
                <h3>Price of Box:{calculateBoxes()*costofbox}</h3>
                </Grid>
                <Grid item sx={1}>
                <h3>Cost for Floor:{calculateBoxes()*nfloor*costofbox}</h3>
                </Grid>
                <Grid item sx={1}>
                <h3>Cost for Building:{calculateBoxes()*nfloor*numberofbuilding *costofbox}</h3>
                </Grid>
                </Grid>
            </Grid>
        </div>
    );
}