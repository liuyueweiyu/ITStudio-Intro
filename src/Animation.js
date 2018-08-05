import React from "react";
import Carmove from "./component/Carmove/Carmove.js";
import Atom from "./component/Atom/Atom";
import Pen from "./component/Pen/Pen";
import Forwords from "./component/Fourwords/Fourwords";

class Animation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            stage:0
        }
        setTimeout(() => {
            this.setState({
                stage:1
            })
        }, 17800);
        setTimeout(() => {
            this.setState({
                stage: 2
            })
        }, 34800);
        setTimeout(() => {
            this.setState({
                stage: 3
            })
        }, 50100);
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
                    <Pen />
                );
            case 3:
                return(
                    <Forwords />
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