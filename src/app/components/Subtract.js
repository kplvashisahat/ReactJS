import React from "react";
import PropTypes from "prop-types";

export class Subtract extends React.Component
{
    constructor(props)
    {
        super();
        this.state = {
            result: props.num
        };
    }

    subtract()
    {
        this.setState({
            result: this.state.result - 2
        });
    }

    render()
    {
        return(
            <div>
                Initially, No. is {this.state.result}
                <div className="btn-toolbar pull-right">
                    <div className="btn-group">
                        <button type='button' onClick={() => this.subtract()} className='btn btn-primary'>Subtract</button>
                    </div>
                </div>
            </div>
        );
    }
}