import React, { useState } from "react";
import { Tab, Tabs } from "@mui/material";
import { Sum } from "../Algebra/Sum";
import { Multi } from "./Multi";
import { Workdone } from "./Workdone";
import { Even } from "./Even";
import { Area } from "./Area";
import { Mileag } from "./Mileage";
import { TilesBox } from "./TilesBox";
import { Boggie } from "./Boggie";

export const ContainerManager = () => {
  const [val, setVal] = useState("Boggie");

  return (
    <div>
      <Tabs value={val} onChange={(e, value) => setVal(value)}>
        <Tab value="add" label="Add" />
        <Tab value="mul" label="Multiply" />
        <Tab value="even" label="Even-Odd" />
        <Tab value="WD" label="Work-Done" />
        <Tab value="area" label="AREA" />
        <Tab value="Travel Cost" label="Travel Cost" />
        <Tab value="Tilesbox" label="Tiles of Box" />
        <Tab value="Boggie" label="Boggie Section" />
      </Tabs>
      {val === "add" && <Sum/>}
      {val === "mul" && <Multi/>}
      {val === "even" && <Even/>}
      {val === "WD" && <Workdone/>}
      {val === "area" && <Area/>}
      {val === "Travel Cost" && <Mileag/>}
      {val === "Tilesbox" && <TilesBox/>}
      {val === "Boggie" && <Boggie/>}
    </div>
  );
};
