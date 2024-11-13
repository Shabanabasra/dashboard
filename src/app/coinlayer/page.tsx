"use client"; 

import { useEffect, useState } from 'react';
import Card from '../../components/Cards';

const API_KEY = '5373966f908de35146c1b17c04a5c6d5';

export default function Dashboard() {
  console.log("Dashboard Page Loaded");

  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(`http://api.coinlayer.com/live?access_key=${API_KEY}`)
      .then((response) => response.json())
      .then((json) => {
        console.log("Data from API:", json);
        setData(json.rates);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container" style={{ textAlign: 'center' }}>
      <h1>Cryptocurrency Market Dashboard</h1>
      <div className="cards-container">
        {data ? (
          Object.keys(data).map((key) => (
            <Card key={key} name={key} price={data[key]} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}