import React from "react";
import Boom from "../Soapbubble/Soapbubble";
import color  from "../Utils/variable.js";

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
        }, 750);
    }

    render(){
        return (
            <div className="light">
                <div className="ball"></div>
                {this.state.ball && 
                <div className="lightboom">
                    <Boom bg={color.two} />
                </div>
                }
            </div>
        );
    }
}

export default Light;