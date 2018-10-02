import React from "react";
import PropTypes from "prop-types";

export class Calc extends React.Component
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
            result: this.state.result + 1
        });
    }

    Sub()
    {
        this.setState({
            result: this.state.result - 1
        });
    }

    Mul()
    {
        this.setState({
            result: this.state.result * 2
        });
    }

    render()
    {
        return(
            <div>
                Initially , No. is {this.props.num} <br/>
                Result is - {this.state.result}
                <div className='btn-toolbar pull-right'>
                    <div className='btn-group'>
                        <button type='button' onClick={() => this.Add()} className='btn btn-primary'>Add</button>
                    </div>
                </div>
                <div className='btn-toolbar pull-right'>
                    <div className='btn-group'>
                        <button type='button' onClick={() => this.Sub()} className='btn btn-primary'>Subtract</button>
                    </div>
                </div>
                <div className='btn-toolbar pull-right'>
                    <div className='btn-group'>
                        <button type='button' onClick={() => this.Mul()} className='btn btn-primary'>Multiply</button>
                    </div>
                </div>
            </div>
        );
    }
}