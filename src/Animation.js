import React from "react";
import Carmove from "./component/Carmove/Carmove.js";
import Atom from "./component/Atom/Atom";
import Pen from "./component/Pen/Pen";
import Forwords from "./component/Fourwords/Fourwords";
import Final from "./component/Final/Final";

class Animation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            stage:0
        }
        this.run();
    }
    async run() {
        let time = [11000, 12000, 17800, 22800],
            output = [1, 2, 3, 4];
        for (let i = 0; i < time.length; i++) {
            await this.setTimeoutAsync(time[i], output[i]);
        }
    }
    setTimeoutAsync(time, output) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(output);
            }, time);
        }).then((value) => {
            this.setState({
                stage:value
            })
        }).catch((err) => {
            console.log('error!');
        })
    }
    render(){
        switch (this.state.stage) {
            case 0:
                return(
                    <Carmove />
                );    
            case 1:
                return(
                    <Atom />
                );
            case 2:
                return(
                    <Forwords />
                );
            case 3:
                return(
                    <Pen />
                );
            case 4:
                return (
                    <Final />
                );
            default:
                break;
        }

        return(
            <h1>Animation</h1>
        );
    }
}



export default Animation;