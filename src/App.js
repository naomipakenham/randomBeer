import React, {Component} from 'react';
import './App.css';
import * as Api from './API';
import Brewery from './Brewery';
import RandomBeer from './RandomBeer';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      isBeerPage: true,
      beerData: {}
    }
  }

  componentDidMount(){
    this.getRandomBeer();
  }

  getRandomBeer(){
    return Api.getRandomBeer()
    .then(data => {
      this.setState({beerData: data});
    }).catch( error => {
      console.error(error);
      throw error;
    });
  }

  onChangePage(){
    const {isBeerPage} = this.state;
    const newIsShowBeerPage = !isBeerPage;
    this.setState({isBeerPage:newIsShowBeerPage});
  }

  render() {
    const { isBeerPage, beerData } = this.state;
    if(Object.entries(beerData).length === 0){
      return(<div className='App'><div className="loader"/></div>);
    }
    const Screen = isBeerPage ? RandomBeer : Brewery;

    return (
      <div className='App'>
        <div className='header'>
          <h1 className='headerText'>Find Beer</h1>
          <div className='foam'/>
          <div className='foam'/>
          <div className='foam'/>
        </div>
        <Screen beerData={beerData} onChangePage={()=>this.onChangePage()} onRandomButtonClick={()=>this.getRandomBeer()}/>
      </div>
    );
  }

}

export default App;
