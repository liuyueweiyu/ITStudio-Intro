import React from "react";
// import "./Soapbubble.scss";

class Soapbble extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bg:props.bg || '#333'
        }
    }

    render(){
        return (
            <div className='soap'>
                <div style={{background:this.state.bg}} className='center'></div>
                <div className='other'><span style={{background:this.state.bg}}></span></div>
                <div className='other'><span style={{background:this.state.bg}}></span></div>
                <div className='other'><span style={{background:this.state.bg}}></span></div>
                <div className='other'><span style={{background:this.state.bg}}></span></div>
                <div className='other'><span style={{background:this.state.bg}}></span></div>                
           </div>
        );
    }
}

export default Soapbble;