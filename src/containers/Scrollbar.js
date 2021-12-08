import React from "react";

class Scrollbar extends React.Component{
    render(){
        return(
            <div className='br bl b--gray' style={{overflowY: 'scroll', height: '500px'}}>
                {this.props.children}
            </div>
        );
    }
}

export default Scrollbar;