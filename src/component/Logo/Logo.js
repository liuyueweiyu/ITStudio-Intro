import React from "react";
class Logo extends React.Component{
    render(){
        return(
            <div className="logo">
                <img src={require("./Logo.png")}/>
            </div>
        )
    }
}

export default Logo;