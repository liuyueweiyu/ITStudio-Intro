import React from "react";
import Animation from "./Animation";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isBegin : true
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
    }

    render(){
        return(
            <React.Fragment>
                {
                    !this.state.isBegin &&
                    <button onClick={this.begin}>点我开始</button>
                }
                {
                    this.state.isBegin &&
                    <Animation />
                }
                <audio id="music" preload="true">
                    <source src={require("./JustBreathe.flac")}/>
                </audio>
            </React.Fragment>
        );
    }
}

export default App;