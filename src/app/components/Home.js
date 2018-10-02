import React from "react";

export class Home extends React.Component
{
    render()
    {
        let a = 8 ;
        let b = "";

        if(true)
        {
            b = <h1> { a } </h1>
        }

        return(
            <div>
                <p>In a Home Component</p>
                { b }
            </div>
        );
    }
}