import React, { useState } from "react";
import { Tab, Tabs } from "@mui/material";
import { Sum } from "../Algebra/Sum";
import { Multi } from "./Multi";
import { Workdone } from "./Workdone";
import { Even } from "./Even";
import { Area } from "./Area";

export const ContainerManager = () => {
  const [val, setVal] = useState("add");

  return (
    <div>
      <Tabs value={val} onChange={(e, value) => setVal(value)}>
        <Tab value="add" label="Add" />
        <Tab value="mul" label="Multiply" />
        <Tab value="even" label="Even-Odd" />
        <Tab value="WD" label="Work-Done" />
        <Tab value="area" label="AREA" />
      </Tabs>
      {val === "add" && <Sum/>}
      {val === "mul" && <Multi/>}
      {val === "even" && <Even/>}
      {val === "WD" && <Workdone/>}
      {val === "area" && <Area/>}
    </div>
  );
};
