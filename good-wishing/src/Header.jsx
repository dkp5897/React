import React from "react";
import cssStyle from "./Colorcondition";
import massage from "./WishingCondition";
import './index.css';

function Heading(){
    return(
        <div className="massage">
            <h1>Hello Sir, <span style={cssStyle} >{massage}</span></h1>
        </div>
    )
}

export default Heading;