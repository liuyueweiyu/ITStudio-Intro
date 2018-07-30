import React from "react";
import moveline from "./moveline.js";
import Logo from "../Logo/Logo"
import "./Carmove.scss";


class Carmove extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            doLogo:true,
            doCar:false,
            first:true,
            seconde:false,
        }
        setTimeout(() => {
            this.setState({
                doLogo:false
            });
        }, 2800);
        setTimeout(() => {
            this.setState({
                doCar:true
            });
            setTimeout(() => {
                this.setState({
                    first: false,
                    seconde: true
                });
            }, 2300);
            console.log("doCar");
        }, 14800);
        
    }
    componentDidMount() {
        moveline("#canvas");
    }
    render(){
        if(!this.state.doCar)
            return(
                <div className='carmove'>
                    { this.state.doLogo && <Logo />}
                    <h1 className='go-ahead'>人们总是匆忙前行</h1>
                    <canvas id='canvas'></canvas>
                    <h2 className='ignore'>却常常忽略<span>兴趣</span></h2>
                    <div className='dispear'></div>
                </div>
            );
        else
            return(
                <div className='idea'>
                    {this.state.first && <h1>以及不经意间迸发的</h1>}
                    {this.state.seconde && <h2>灵感</h2>}
                </div>
            );
    }
}

export default Carmove;