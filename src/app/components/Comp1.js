import React from "react";
import PropTypes from "prop-types";

export class Comp1 extends React.Component
{
    constructor(props)
    {
        super();
        this.state = {
            result: props.num
        };
    }

    Add()
    {
        this.setState({
            result: this.state.result + 2
        });
    }

    Sub()
    {
        this.setState({
            result: this.state.result - 2
        });
    }

    render()
    {
        return(
            <div>
                <h4>Initially, No is - {this.props.num}</h4>
                <h5>Now, Result is - {this.state.result}</h5>
                <button onClick={() => this.Add()} >Add</button>
                <button onClick={() => this.Sub()}>Sub</button>
            </div>
        );
    }
}