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
        setTimeout(() => {
            this.setState({
                stage:1
            });
            setTimeout(() => {
                this.setState({
                    stage: 2
                });
                setTimeout(() => {
                    this.setState({
                        stage: 3
                    });
                    setTimeout(() => {
                        this.setState({
                            stage: 4
                        });
                    }, 11000);
                }, 12000);
            }, 17800);
        }, 22800);




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