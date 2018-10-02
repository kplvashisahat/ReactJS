import React from "react";
import { render } from "react-dom";

import { Add } from "./components/Add";
import { Subtract } from "./components/Subtract";
import {Mul} from "./components/Mul";
import {Calc} from "./components/Calc";
import {Header} from "./components/Header";

class Abc extends React.Component
{
    render()
    {
        return(
            <div className="container">
                <Header/>
                <Add num={20} />
                <Subtract num={100} />
                <Mul num={10} />
                <Calc num={50} />
            </div>
        );
    }
}
  
render(<Abc/> , window.document.getElementById("abc"));