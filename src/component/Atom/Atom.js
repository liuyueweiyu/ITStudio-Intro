import React from "react";
import "./Atom.scss";
import ahead from "./ahead.js";

class Atom extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            second:false,
            small:false
        }
        // setTimeout(() => {
        //     this.setState({
        //         second:true
        //     })
        // }, 5000);
        // setTimeout(() => {
        //     this.setState({
        //         small: true
        //     })
        // }, 8000);
    }

    componentDidMount(){
        ahead("#canvas");
    }

    render(){
        return (
            <div className="atom">
                <canvas id="canvas"></canvas>
                <div className="outer">
                    {/* <div className="first"></div> */}
                    {this.state.second && (
                        <div className="second"></div>                    
                    )}
                    {this.state.small &&
                        <div className="small">
                            <svg width="110px" height="110px">
                                <circle cx="55" cy="55" r="50" stroke-width="8.8" stroke="#99ccff" fill="none"></circle>
                                <circle cx="55" cy="55" r="50" stroke-width="10" stroke="#666" fill="none" class="circlesvg"></circle>
                            </svg>
                            <div className="smallball"></div>
                        </div>
                    }
                </div>
                
            </div>
        );
    }
}

export default Atom;

/*
 **
 */