import React from "react";
import {render} from "react-dom";

import { StatelessComp } from "./components/StatelessComp";
import {Comp1} from "./components/Comp1";

class App2 extends React.Component
{
    render()
    {
        return(
            <div>
                <h1>Har Har MAHADEV</h1>
                <StatelessComp name={"Kapil"} />  
                <Comp1 num={11} />
            </div>
        );
    }
}

render(<App2/> , window.document.getElementById("app2"));