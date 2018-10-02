import React from "react";
import PropTypes from "prop-types";

export class Home extends React.Component
{
    constructor(props) 
    {
        super(); // It is the parent constructor that always be called & inherited from React.Component
        this.state = {
            age: props.initialage
        };
    }
    

    addButton()
    {
        this.setState({
        age : this.state.age + 2
        // console.log(this.age);
        });
    }

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
                <p>Your Name is:{this.props.name} , Age is :{this.state.age} , </p>
                { b }
                <p> Object => City : {this.props.data.city} </p>
                <p>Looping the array elements</p>

                <p>States : {this.props.data.states.map((state) => <li>{state}</li>)}</p>  {/* It is the way to loop in React */}
                {this.props.children}

                Now, we'll learn Events
                <br/>
                <button onClick={() => this.addButton()} className="btn btn-primary">Add</button> 
                {/* onclick is written in es6 , we can also write {this.addButton.bind(this)} */}
            </div>
        );
    }
}

{/* Now, here I am validatiing the type of the props */}
Home.propTypes = {
    name: PropTypes.string,
    initialage: PropTypes.number,
    data: PropTypes.object,
    children: PropTypes.element.isRequired
}

{/* Use PropTypes instead of React.PropTypes as it is deprecated */}
{/* children is a reserved keyword */}