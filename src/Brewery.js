import React, {Component} from 'react';

class Brewery extends Component {

  getLocations(locations){
    return locations.map((location)=>{
      var breweryInfo = [
        <div>{location.name}</div>,
        <div>{location.streetAddress}</div>,
        <div>{location.locality}</div>,
        <div>{location.region}</div>,
        <div>{location.postalCode}</div>,
        <div>{location.country.displayName}</div>
      ];
      if (location.website) {
        breweryInfo.push (<a href={location.website}>{location.website}</a>)
      }
      if(location.phone) {
        breweryInfo.push(<a href={'tel:'+location.phone}>{location.phone}</a>)
      }
      return <div className='breweryInfo'>
        {breweryInfo}
      </div>
    });
  }

  getBreweries(breweries){
    return breweries.map((brewery, index)=>{
      return <div>
        <h2 className='breweryTitle'>{brewery.name}</h2>
        <div className='breweryContainer'>
          {this.getLocations(brewery.locations)}
        </div>
      </div>;
    });
  }

  render() {
      const {onChangePage, beerData:{breweries}} = this.props;
      const breweryArray = this.getBreweries(breweries);
      const back = '<< back';
  return (
      <div className='breweyPage'>
        <u className='pageLink backLink' onClick={onChangePage}>{back}</u>
        <div className='breweries'>
          {breweryArray}
        </div>
      </div>
    );
  }

}

export default Brewery;
