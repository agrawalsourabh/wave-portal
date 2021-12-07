import React from "react";
import Button from "./Button";
import "tachyons";

class Introduction extends React.Component{
    connectWalletButton(props){
        if(!this.props.isConnected){
            return <Button text={'Connect your wallet'} onClick={props.onClick}/>
        }
    }
    render(){
        return(
            <header className="tc ph4">
                <h1 className="f3 f2-m f1-l fw2 black-90 mv3">
                     👋 Hey there!
                </h1>
                <div className='flex justify-center'>
                    <h2 className="f5 w-30 f4-m f3-l fw2 black-50 mt0 lh-copy">
                        I am Sourabh! I am a Software Developer.
                    </h2>
                    {
                        this.connectWalletButton(this.props)  
                    }
                </div>
            </header>
        );
    }
}

export default Introduction;

