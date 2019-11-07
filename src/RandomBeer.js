import React, {Component} from 'react';
import * as image from './no-image.jpg'


class RandomBeer extends Component {

  render() {
    console.log(this.props.beerData)
    const {onChangePage, onRandomButtonClick, beerData:{nameDisplay, abv, style:{description, name}}} = this.props;
    const abvValue = abv ? abv + '%' : 'n/a';
    return (
    <div className='beerPage'>
      <button className='randomButton' onClick={onRandomButtonClick}>Click for Random</button>
      <div className='beerCard'>
        <img className='beerImg' alt='beerImg' src={image}/>
        <div className='beerDetails'>
          <h2 className='beerTitle'>{nameDisplay}</h2>
          <b>Type:</b><p>{name}</p>
          <b>Description:</b><p>{description}</p>
          <b>ABV:</b><p>{abvValue}</p>
          <u className='pageLink' onClick={onChangePage}>more info...</u>
        </div>
        <div className='clear'/>
      </div>
    </div>
    );
  }

}

export default RandomBeer;
