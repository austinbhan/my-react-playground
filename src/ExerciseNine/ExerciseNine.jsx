import { useState, useEffect } from 'react';

export default function ExerciseNine() {

  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);

  const api = 'https://cat-fact.herokuapp.com/facts';

  async function getData() {
    const res = await fetch(api);
    const realRes = await res.json();
    setNewData(realRes);
  }

  useEffect(() => {

    fetch(api)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data', error));

    getData();
    

  }, []);

  console.log('line 28', newData);

  return (
    <div>
      <h1>Exercise 9: Fetch and render an API</h1>
      <div>
        <h2>This is one way to render</h2>
        {data.map(item => (
          <p key = {item._id}>{item.text}</p>
        ))}
      </div>
      <h2>This is another way to render</h2>
      <div>{data.map(item => (
        <p key = {item._id}>{item.text}</p>))}
      </div>
    </div>
  );
}
