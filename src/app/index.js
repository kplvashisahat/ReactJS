// console.log("React JS .. Hey Kapil");
import React from "react";
import { render } from "react-dom";

import {Header} from "./components/Header";
import {Home} from "./components/Home";

class App extends React.Component
{
    render()
    {
        var user = {
            city: "Fatehabad",
            states: ["Haryana" , "Punjab"]
        };
        return(
            <div className = "container">
                <h1>Hello Kapil</h1>
                <div className="row">
                    <div className="col-xs-10">
                        <Header/>
                        <Header/> 
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10">
                        <Home name={"Kaps"} age={23} data={user}>
                            <p>This is a Children!</p>
                        </Home>
                    </div>
                </div> 
            </div>
        );
    }
}

render(<App/> , window.document.getElementById("app"));