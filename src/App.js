import React, { useEffect, useState } from 'react';
import './App.css';

//testing NOT WORKING
function App() {

  const [data, setData] = useState('');
  const [api, setApi] = useState('');
  const fetchData = async () => {
    const api = await fetch('https://jsonplaceholder.typicode.com/todos/'
    , {
    headers: {
      'Authorization: Bearer': "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzIzMjcwODBjNjY4ZjQ0MDg5ODQ0NmJkYTQxNzg1ZSIsInN1YiI6IjYzYmRlOTZiZmMzMWQzMDA5MmM2NTY4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Kvd3vxH0pZK8BAdfQne2lmhtdvEbTKtjIUR_qcD4ScI"
    }
  }
  );
    setData(await api.json());
    setApi (api);
  };
  useEffect(() => {
    fetchData();
  }, []);

return (
  <>
    <h1>{api}</h1>
    {data === '' ? (
      <h1>Fetching todos...</h1>
     ) : (
       <ul>
         {data.map(item => (
           <li key={item.id}>{item.title}</li>
         ))}
      </ul>
    )}
  </>
);
}

export default App;
