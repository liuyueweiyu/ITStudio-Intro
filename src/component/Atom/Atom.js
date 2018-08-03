import React from "react";
import "./Atom.scss";
import ahead from "./ahead.js";

class Atom extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            first:false,
            second:false,
            small:false
        }
        setTimeout(() => {
            this.setState({
                second:true
            })
        }, 7200);
        setTimeout(() => {
            this.setState({
                small: true
            })
        }, 7700);
    }

    componentDidMount(){
        ahead("#canvas");
    }

    render(){
        return (
            <div className="atom">
                <canvas id="canvas"></canvas>
                <div className="outer">
                    <div className="first"></div>
                    {this.state.second && (
                        <div className="second"></div>                    
                    )}
                    {this.state.small &&
                        <div className="small">
                            <svg width="110px" height="110px">
                                <circle cx="55" cy="55" r="50" stroke-width="8.8" fill="none" className="circleone"></circle>
                                <circle cx="55" cy="55" r="50" stroke-width="10" fill="none" class="circlesvg"></circle>
                            </svg>
                            <div className="smallball"></div>
                        </div>
                    }
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
 ** 4. 两个小球从中间往两边移动 0.5s --------------------7.7s-------26s
 ** 5. 中间小球开始出现 0.3s ---------------------------8s -------27.3s
 ** 6. 中间小球两边旋转 5.4s ---------------------------13.4s
 ** 7. 中间的环闭紧 -----------------------------------14.751s

 */