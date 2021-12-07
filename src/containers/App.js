import React from 'react';
import './App.css';
import Introduction from '../components/Introduction';
import Button from '../components/Button';


class App extends React.Component {

  state = {
    isConnected: false,
    ethereum: null,
    account: null
  };

  checkIfWalletIsConnected = async() => {

    try{
      // check if wallet is connected
      const {ethereum} = window;

      if(!ethereum){
        console.log("Metamask is not connected");
        return false;
      }
      console.log("Metamask is connected: ", ethereum);
      this.setState({ethereum: ethereum});
      return true;
    }catch(error){
      console.log(error);
    }

  }

  connectToWallet = async() => {
    let accounts = await this.state.ethereum.request({method: 'eth_requestAccounts'});

      if(accounts.length !== 0){
        const account = accounts[0];
        this.setState({account: account});
        console.log("Found an authorised account: " + account);
        console.log("Total accounts: " + accounts.length);
      }
      else{
        console.log("No authorised account found");
      }
  }

  componentDidMount = async() => {
    console.log("didMount called");
    let isConnect = await this.checkIfWalletIsConnected();
    console.log("isConnect: " + isConnect);
    this.setState({isConnected: isConnect});
  }

  wave = () => {
    console.log("wave clicked!");
  }

  render(){

    return (
      <div className="App">
        <Introduction isWalletConnected={this.state.isConnected} onClick={this.connectToWallet}/>
        <Button text={'Wave 👋 at me!'} onClick={this.wave}/>
      </div>
    );
  }
}

export default App;
