import React from "react";
class Pen extends React.Component{
    
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="pen">
                <h2>在这里你可以放肆你的想象</h2>
                <h3>在这里还有可靠的朋友实现你的创意</h3>
                <div className="pen-body"><span></span></div>
            </div>
        );
    }
}

export default Pen;