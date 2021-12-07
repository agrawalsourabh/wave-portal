import React from 'react';
import './App.css';
import Introduction from '../components/Introduction';
import Button from '../components/Button';


class App extends React.Component {
  render(){

    return (
      <div className="App">
        <Introduction />
        <Button text={'Wave 👋 at me!'}/>
      </div>
    );
  }
}

export default App;
