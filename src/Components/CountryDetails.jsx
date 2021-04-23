import React from 'react';
import countries from '../countrues';
import { Link } from 'react-router-dom';

function CountryDetails(props) {
  let countryClicked = countries.find(
    (country) => country.cca3 === props.match.params.location
  );

  function getBorder() {
    return countryClicked.borders.map((border, i) => {
      let bordersArr = countries.find((country) => {
        return country.cca3 === border;
      });

      return (
        <Link key={i} to={`/country/${border}`}>
          <li>
            {bordersArr.flag} {bordersArr.name.common}
          </li>
        </Link>
      );
    });
  }

  console.log(getBorder());

  console.log(countryClicked);

  return (
    <div>
      <div style={{ width: '50vw' }} className="col-7">
        <h1>{countryClicked.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{countryClicked.capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {countryClicked.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>{getBorder()}</ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CountryDetails;
