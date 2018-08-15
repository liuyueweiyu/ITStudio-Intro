import React from "react";
import Animation from "./Animation";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isBegin : false
        }
        this.begin = this.begin.bind(this);
    } 

    begin(){
        this.setState({
            isBegin:true
        });
        const audio = document.getElementById('music');
        setTimeout(() => {
            audio.play();
        }, 2800);   //Logo移动时间+变透明两个动画的时间+预留时间
        setTimeout(() => {
            audio.pause();
        }, 78300);
    }

    render(){
        return(
            <React.Fragment>
                {
                    !this.state.isBegin &&
                    <div className="begin">
                        <a title="点击开始" className="begin-button" onClick={this.begin}></a>
                    </div>
                }
                {
                    this.state.isBegin &&
                    <Animation />
                }
                <audio id="music" preload="true">
                    <source src={require("./bgm.mp3")}/>
                </audio>
            </React.Fragment>
        );
    }
}

export default App;