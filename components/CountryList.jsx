import { useEffect, useState } from 'react';
import axios from 'axios';

const CountryList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const countryData = response.data;
        const countriesList = Object.keys(countryData).map((key) => ({
          code: key,
          name: countryData[key].name.common,
        }));
        setCountries(countriesList);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Country List</h2>
      <ul>
        {countries.map((country) => (
          <li key={country.code}>{country.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
