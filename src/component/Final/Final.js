import React from "react";
import Light from "../Light/Light";

class Final extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            light:false,
            all : true
        }
        setTimeout(() => {
            this.setState({
                light: true
            });
        }, 5050);
        setTimeout(() => {
            this.setState({
                all:false
            });
        }, 13000);
    }

    render(){
        if(this.state.all)
            return (
                <div className="final">
                    <h1>我们是创造者</h1>
                    <h2>用灵感点亮生活</h2>
                    <h3>我们是实践者</h3>
                    <h4>用智慧实现构想</h4>
                    {this.state.light &&
                    <Light />}
                </div>
                
            );
        else
            return(
               <div className="all">
                    <img src={require("./Logo.png")}/>
                    <p>用自己的智慧、 思想、 热情创造未来</p>
               </div>
            );
    }
}

export default Final;