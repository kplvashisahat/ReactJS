import React from "react";

export class Header extends React.Component
{
    render()
    {
        return(
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="ul nav navbar-nav">
                            <li>
                                <a href="#">Home</a>
                                <br/>
                                <a href="#">Main</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}