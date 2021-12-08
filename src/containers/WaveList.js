import React from "react";
import Wave from "../components/Wave";
import Scrollbar from "./Scrollbar";

class WaveList extends React.Component{
    render(){
        const waveDetails = this.props.waveDetails;

        const waveComponent = waveDetails.map((detail, i) => {
            return <Wave key={i} waveDetail={detail}/>
        });
        return (
            <div className='flex flex-column center w-75'>
                <div className="flex">
                    <p className='w-50 fa6 pa3 bb b--black-20'> <strong> Addresses </strong></p>
                    <p className='w-50 fa6 pa3 bb b--black-20'> <strong> Waves </strong> </p>
                </div>
                <Scrollbar>
                    {waveComponent}
                </Scrollbar>
            </div>

        );
    }
}

export default WaveList;