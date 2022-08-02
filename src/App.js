import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
// import AddMusicForm from './Components/AddMusic/AddMusicForm';


function App() {

  const [music, setMusic] = useState([]);


  useEffect(() => {
    getAllSongs();
  }, []);
  // useEffect(async () => {
  //   const response = await axios.get('http://127.0.0.1:8000/api/music/');
  //   console.log(response.data);
  // }, []);


  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/api/music/');
    console.log(response.data);
  }

  return (
    <div className="App">
      {/* <DisplayMusic parentEntries={music}/>
      <AddMusicForm /> */}
      {/* <button onClick={() => getAllSongs()}>Get all songs.</button> */}
    </div>
  );
}

export default App;
