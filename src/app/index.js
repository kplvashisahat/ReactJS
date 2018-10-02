// console.log("React JS .. Hey Kapil");
import React from "react";
import { render } from "react-dom";

import {Header} from "./components/Header";
import {Home} from "./components/Home";
import {Sidebar} from "./components/Sidebar";

class App extends React.Component
{
    render()
    {
        return(
            <div className = "container">
                <h1>Hello Kapil</h1>
                <div className="row">
                    <div className="col-xs-10">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10">
                        <Home/>
                    </div>
                </div>  
                <div className="row">
                    <div className="col-xs-10">
                        <Sidebar/>
                    </div>
                </div>  
            </div>
        );
    }
}

render(<App/> , window.document.getElementById("app"));