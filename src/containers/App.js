import React from 'react';
import { ethers } from 'ethers';
import abi from '../utils/WavePortal.json';

import './App.css';
import Introduction from '../components/Introduction';
import Button from '../components/Button';



class App extends React.Component {

  state = {
    isConnected: false,
    ethereum: null,
    account: null,
    contractAddress: '0x75B3837a0Cd77F07744a2d23B8E02a979cAF99e0',
    contractABI: abi.abi
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

  wave = async() => {
    console.log("wave clicked!");

    let {ethereum, contractAddress, contractABI} = this.state;

    try{
      if(ethereum){
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer);

        let count = await wavePortalContract.getTotalWaves();
        console.log("Total waves: %d", count.toNumber() );

        /*
          Executing wave function from the contract
        */

        const waveTxn = await wavePortalContract.wave();
        console.log("waveTxn: " + waveTxn);
        console.log("Mining.... " + waveTxn.hash);
        
        await waveTxn.wait();
        console.log("Mined-- " + waveTxn.hash);

        count = await wavePortalContract.getTotalWaves();
        console.log("Total waves: %d", count.toNumber() );
          
      }
      else{
        console.log("ethereum wallet is not connected.")
      }
    }
    catch(error){
      console.log(error);
    }


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
