import React from "react";
import Soapbubble from "../Soapbubble/Soapbubble";

class Final extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            boom : false,
            one: false,
            two:false,
            all : true
        }
        setTimeout(() => {
            this.setState({
                one: true
            });
        }, 2000);
        setTimeout(() => {
            this.setState({
                boom:true,
                one: false
            });
        }, 3300);
        setTimeout(() => {
            this.setState({
                boom:false,
                two: true
            });
        }, 4000);
        setTimeout(() => {
            this.setState({
                all:false
            });
        }, 8500);
    }

    render(){
        if(this.state.all)
            return (
                <div className="final">
                    <h1>我们是创造者</h1>
                    <h2>用灵感点亮生活</h2>
                    <h3>我们是实践者</h3>
                    <h4>用智慧实现构想</h4>
                    {this.state.one && <span className="small one"></span>}
                    {this.state.boom && <div className="boom"><Soapbubble bg="#fff" /></div>}
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