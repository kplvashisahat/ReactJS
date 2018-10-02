import React from "react";
import PropTypes from "prop-types";

export class Add extends React.Component
{
    constructor(props) 
    {
        super(); // It is the parent constructor that always be called & inherited from React.Component
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

    render()
    {
        return(
            <div>
                Initially, No. is {this.state.result}
                <br/> <br/>
                <div className='btn-toolbar pull-right'>
                    <div className='btn-group'>
                        <button type='button' onClick={() => this.Add()} className='btn btn-primary'>Add</button>
                    </div>
                </div>
            </div>
        );
    }
}