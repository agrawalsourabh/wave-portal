import React from "react";
import './Filler.css';

class Filler extends React.Component{
    render(){
        var perc = this.props.progressBarPercentage * 3.5; 
        return (
            <div className='filler' style={{width:perc}}> Mining...
            </div>
        );
    }
}

export default Filler;