import React from "react";
import ahead from "./ahead.js";
import Selectbox from "../Selectbox/Selectbox";

class Atom extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            first:true,
            second:false,
            third:false,
            // small:false
        }
        setTimeout(() => {
            this.setState({
                first:false,
                second:true
            });
            setTimeout(() => {
                this.setState({
                    second: false,
                    third: true
                });
            }, 7900);
        }, 7200);
    }

    componentDidMount(){
        ahead("#canvas");
    }

    render(){
        return (
            <div className="atom">
                <canvas id="canvas"></canvas>
                <div className="outer">
                    {this.state.first &&(
                        <div className="first"></div>
                    )}
                    {this.state.second && (
                        <div className="second">
                            <Selectbox />
                        </div>                    
                    )}
                    {this.state.third&&(
                        <div className="third"></div>
                    )}
                </div>
                <h1>人们总是独自前进</h1>
                <h2>却时常忘记选择</h2>
            </div>
        );
    }
}

export default Atom;

/*
 ** 1. 粒子动画准备时间 1.7s ---------------------------1.7s-----19.5s
 ** 2. 第一个球出现 0.5---------------------------------2.2s-----20s
 ** 3. 第一个球运动 5s/ 人们总是独自前进 动画闪现5s-------7.2s-----25s
 ** 4. Selectbox 7.9s ---------------------------------17.1s----32,1s
 ** 5. 变大 1s ----------------------------------------18.1s---- 33.1s
 */