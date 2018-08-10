import React from "react";
import ballmove from "./ball.js";

class Light extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            ball:false
        }
        setTimeout(() => {
            this.setState({
                ball: true
            });
            ballmove("#canvas");
        }, 2250);
    }

    componentDidMount() {
        
    }
    render(){
        return (
            <div className="light">
                <div className="ball"></div>
                {this.state.ball && <canvas id="canvas"></canvas>}
            </div>
        );
    }
}

export default Light;