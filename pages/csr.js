import { useEffect, useState } from 'react';

export default function Csr() {
  const [data, setData] = useState();
  console.log(data);
  useEffect(() => {
    fetch('http://localhost:3000/api/data')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      {data.map((item) => (
        <div>
          <h1>{item.name}</h1>
          <img src={item.photo}></img>
        </div>
      ))}
    </div>
  );
}
