import React from "react";
import moveline from "./moveline.js";
import Logo from "../Logo/Logo"
import Soap from "../Soapbubble/Soapbubble";
import color from "../Utils/variable.js";

class Carmove extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            doLogo:true,
            doCar:false,
            first:true,
            seconde:false,
            soap:false
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
                    soap: true
                });
            }, 2500);
            setTimeout(() => {
                this.setState({
                    first: false,
                    seconde: true
                });
            }, 4000);
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
                    <h3 className="go-ahead-en">Life is always in a hurry</h3>
                    <h1 className='go-ahead'>人们总是匆忙前行</h1>
                    <canvas id='canvas'></canvas>
                    <h4 className='ignore-en'>But often ignore <span>interest</span></h4>
                    <h2 className='ignore'>却常常忽略<span>兴趣</span></h2>
                    <div className='dispear'></div>
                </div>
            );
        else
            return(
                <div className='idea'>
                    {this.state.first && 
                    (
                        <React.Fragment>
                            <h3>And inadvertently bursting</h3>
                            <h1>以及不经意间迸发的</h1>
                            {this.state.soap &&
                            <Soap className = 'Soap' bg={color.two}/>
                            }
                            {!this.state.soap &&
                                <div className='box'></div>
                            }
                        </React.Fragment>
                    )
                    }
                    {this.state.seconde && (
                        <React.Fragment>
                            <h2>Inspiration</h2>

                        </React.Fragment>
                    )}
                </div>
            );
    }
}

export default Carmove;

//动画顺序 ---------------------------------------- 结束时间点
//1. Logo移动 2800 ------------------------------------2.8s
//2. "人们总是匆忙前行" 动画闪现 4.2s ---------------------7s
//3. "却常常忽略灵感" 动画闪现 3.5S ---------------------10.5s
//4. "以及不经意间迸发的" 动画闪现 4s -------------------14.5s
//5. "灵感" 动画闪现 3.3s ------------------------------17.8s
