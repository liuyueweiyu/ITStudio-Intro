import React from "react";
import "./Selectbox.scss";

class Selectbox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fisrt:true
        }


    }

    render(){
        return(
            <div className="selectbox">
                {this.state.fisrt &&
                    <React.Fragment>
                        <div className="first"></div>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </React.Fragment>
                }
            </div>
        );
    }

}

export default Selectbox;