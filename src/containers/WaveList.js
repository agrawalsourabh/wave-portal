import React from "react";
import Wave from "../components/Wave";

class WaveList extends React.Component{
    render(){
        const waveDetails = this.props.waveDetails;

        const waveComponent = waveDetails.map((detail, i) => {
            return <Wave key={i} waveDetail={detail}/>
        });
        return (
            <div>
                {waveComponent}
            </div>
        );
    }
}

export default WaveList;