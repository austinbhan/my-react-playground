import { useState, useEffect } from 'react';

export default function ExerciseTen() {

  const [countries, setCountries] = useState([]);

  // See env variable for more information on PostgreSQL connection

  async function getCountries() {
    const result = await fetch('http://localhost:4000/countries');
    const data = await result.json();
    setCountries(data);
  }

  
  useEffect(() => {
    getCountries();
  }, []);

  console.log('line 20', countries);


  return (
    <div>
      <h1>This is Exercise Ten</h1>
      <h3>For this exercise, fetch the data for a PostgreSQL 
        table that was made in terminal </h3>
      <h3>Dec 4 2023: Render a Get All Request from countriesAPI</h3>

      <div>{countries.map(country => (
        <ul key = {country.id}>
          <li>{country.country}</li>
        </ul>
      ))}</div>
      
    </div>
  );
}
