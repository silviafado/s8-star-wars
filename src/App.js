import { useState } from 'react';
import axios from 'axios';
import './App.css';
import ShipsList from './components/shipsList/ShipsList';
import ShipProfile from './components/shipProfile/ShipProfile'

function App() {

  const [list, setList] = useState([]);

  const getData = async () => {
    const results = await axios(
      'https://swapi.dev/api/starships',
    );
    console.log(results);
    setList(results.data.results);
  };
  getData();

  return (
    <div className="App">
      <ShipsList list={list} />
      <ShipProfile list={list} />
    </div>
  );
}

export default App;
