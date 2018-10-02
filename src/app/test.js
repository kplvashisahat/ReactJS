import React from "react";
import { render } from "react-dom";

class Abc extends React.Component
{
    render()
    {
        return(
            <h1>Kapil Vashishat</h1>
        );
    }
}
  
render(<Abc/> , window.document.getElementById("abc"));