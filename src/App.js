import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';



function App() {

  const [music, setMusic] = useState([{title: 'jfi', artist: 'fjask', album: 'klafsj', release_date: '2022-20-30', genre: 'skjdfl'}]);

  // useEffect(() => {
  //   getAllSongs();
  // }, []);


  // async function getAllSongs(){
  //   const response = await axios.get('http://127.0.0.1:8000/api/music/');
  //   console.log(response.data);
  //   setMusic(response.data)
  // }

  return (
    <div className="App">
      <DisplayMusic parentEntries={music}/>

    </div>
  );
}

export default App;
