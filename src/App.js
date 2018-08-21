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
        console.log("哼o(￣ヘ￣o＃) 写完这个就可以跑路了...///////")
        setTimeout(() => {
            audio.play();
        }, 2800);   //Logo移动时间+变透明两个动画的时间+预留时间
        setTimeout(() => {
            for(let i = 1;i<= 100;i++){
                setTimeout((index = i) => {
                    audio.volume = (100 - index)*0.01;
                }, i*20);
            }

        }, 76300);
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
                <audio id="music" preload="true" type="audio/mpeg">
                    <source src={require("./bgm.mp3")}/>
                </audio>
            </React.Fragment>
        );
    }
}

export default App;