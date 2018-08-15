import React from "react";
import backgound from "./backgound.js";

class Fourwords extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            first:true,
            second:false
        }
        setTimeout(() => {
            this.setState({
                first:false,
                second:true
            });
        }, 4000);
    }
    componentDidMount(){
        backgound("#canvas");
    }

    render(){
        return(
            <div className="fourwords">
                <canvas id="canvas"></canvas>
                {this.state.first && <h1>也许生活意味着选择，但是它值得你去选择</h1>}
                {this.state.second && <h2>而我们等待着你的选择</h2>}
            </div>
        );
    }
}

export default Fourwords;