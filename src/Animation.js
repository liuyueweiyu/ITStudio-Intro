import React from "react";
import Carmove from "./component/Carmove/Carmove.js";


class Animation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            stage:0
        }
    }


    render(){
        switch (this.state.stage) {
            case 0:
                return(
                    <Carmove />
                );    


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