import React from "react";
import PropTypes from "prop-types";

export class Mul extends React.Component
{
    constructor(props)
    {
        super();
        this.state = {
            result: props.num
        };
    }

    mul()
    {
        this.setState({
            result: this.state.result * 2
        });
    }

    render()
    {
        return(
            <div>
                Initially, No. is {this.state.result}
                <div className='btn-toolbar pull-right'>
                    <div className='btn-group'>
                        <button type='button' onClick={() => this.mul()} className='btn btn-primary'>Multiply</button>
                    </div>
                </div>
            </div>
        );
    }
}