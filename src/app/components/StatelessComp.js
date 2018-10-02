import React from "react";
import PropTypes from "prop-types";

export const StatelessComp = (props) => {
    return(
        <div>
            <h2> Hello, Mr. {props.name} </h2> {/* NOTE - If const is using then we are using props.name besides this.props.name as we use it in another classes */}
        </div>
    );
};