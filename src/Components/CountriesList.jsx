import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

function CountriesList(props) {
  const newCon = () => {
    return countries.map((country, i) => {
      return (
        <Link key={i} to={`/country/${country.cca3}`}>
          <div className="list-group-item list-group-item-action">
            {country.flag}
            {country.name.common}
          </div>
        </Link>
      );
    });
  };
  return (
    <div>
      <div className="col-5" style={{ maxheight: '90vh', overflow: 'scroll' }}>
        <div className="list-group">{newCon()}</div>
      </div>
    </div>
  );
}

export default CountriesList;
