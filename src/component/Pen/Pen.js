import React from "react";
import "./Pen.scss";

class Pen extends React.Component{
    
    render(){
        return (
            <div className="pen">
                <h1>如果想要活得精彩</h1>
                <h2>不妨做些有趣的事</h2>
                <h3>不妨与有趣的伙伴同行</h3>
                <div className="pen-body"><span></span></div>
            </div>
        );
    }
}

export default Pen;