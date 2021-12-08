import React from "react";
import Filler from "../components/Filler";
import './ProgressBar.css';

class ProgressBar extends React.Component{
    progressBar = (progressBarVis, progressBarPer) => {
        if(progressBarVis){
            return (
                <div className='center progress-bar'>
                    <Filler progressBarPercentage={progressBarPer}/>
                </div>
            );
        }
    }
    render(){
        var progressBarVis = this.props.progressBarVis;
        var progressBarPer = this.props.progressBarPer;
        return(
            <div>

                {this.progressBar(progressBarVis, progressBarPer)}
            </div>
        );
    }
}

export default ProgressBar;