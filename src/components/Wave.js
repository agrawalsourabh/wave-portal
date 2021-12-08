import React from "react";

class Wave extends React.Component{
    render(){
        const {waveCount, address} = this.props.waveDetail;
        return(
            <div className='flex'>
                <p className="fw6 tl pa3 bg-white">address: {address}</p>
                <p className="fw6 tl pa3 bg-white">wave: {waveCount} </p>
            </div>
        );
    }
}

export default Wave;