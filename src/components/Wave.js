import React from "react";

class Wave extends React.Component{
    render(){
        const {waveCount, address} = this.props.waveDetail;
        return(
            <div className='flex justify-center'>
                
                <p className="pa3 w-50 bb b--black-20">{address}</p>
                <p className="pa3 w-50 bb b--black-20 ">{waveCount} 👋</p>
            </div>
        );
    }
}

export default Wave;