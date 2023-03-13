import axios from 'axios';
import {useEffect, useState} from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api')
      .then(response => {
        setData(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>{data ? data : 'Loading...'}</h1>
    </div>
  );
}

export default App;