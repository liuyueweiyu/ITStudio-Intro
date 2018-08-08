import React from "react";
// import "./Fourwords.scss";
import backgound from "./backgound.js";

class Fourwords extends React.Component{
    
    componentDidMount(){
        backgound("#canvas");
    }

    render(){
        return(
            <div className="fourwords">
                <canvas id="canvas"></canvas>

            </div>
        );
    }
}

export default Fourwords;