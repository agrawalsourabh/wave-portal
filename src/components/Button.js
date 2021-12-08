import React from "react";

class Button extends React.Component{
    render(){
        const {text, onClick} = this.props;

        return (
            <div>
                <a className="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-gray" href="#0" onClick={onClick}>{text}</a>
            </div>
        );
    }
}

export default Button;