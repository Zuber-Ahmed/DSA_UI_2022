import React from "react";
import { Sum } from "../Algebra/Sum";
// import {SimpleBackdrop} from "../Algebra/Sum"
import { ContainerManager } from "./ContainerManager";

export const Home=()=>{

    return(
        <div>
            <h3>Please Enter Your Numbers</h3>
            <ContainerManager/>
        </div>
    );
}