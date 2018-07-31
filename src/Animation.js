import React from "react";
import Carmove from "./component/Carmove/Carmove.js";
import Atom from "./component/Atom/Atom";

class Animation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            stage:1
        }
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
                )

                break;
        
            default:
                break;
        }

        return(
            <h1>Animation</h1>
        );
    }
}

export default Animation;