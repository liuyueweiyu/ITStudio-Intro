import React from "react";
import "./Selectbox.scss";

class Selectbox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fisrt:true,
            second:false
        }
        setTimeout(() => {
            this.setState({
                fisrt: false,
                second: true
            })
        }, 300);

    }

    render(){
        return(
            <div className="selectbox">
                {this.state.fisrt &&
                    <React.Fragment>
                        <div className="selectbox-first"></div>
                        <span className="selectbox-line"></span>
                        <span className="selectbox-line"></span>
                        <span className="selectbox-line"></span>
                        <span className="selectbox-line"></span>
                    </React.Fragment>
                }
                {this.state.second &&
                    <React.Fragment>
                        <div className="selectbox-block"></div>
                        <div className="selectbox-block"></div>
                        <div className="selectbox-block"></div>
                        <div className="selectbox-block"></div>
                    </React.Fragment>
                }
            </div>
        );
    }

}

export default Selectbox;