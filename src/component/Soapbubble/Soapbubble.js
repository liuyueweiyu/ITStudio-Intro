import React from "react";

class Soapbble extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bg: `rgb(${props.bg})` || '#333'
        }
        // console.log(11);
        console.log(this.state.bg);
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