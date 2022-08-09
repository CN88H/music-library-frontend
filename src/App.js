import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import AddMusicForm from './Components/AddMusic/AddMusicForm';


function App() {

  const [music, setMusic] = useState([]);


  useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/api/music/');
    console.log(response.data);
    setMusic(response.data)
  }

  // function addNewSong(song) {
  //   let temptSong = [song, ...music]
  //   setMusic(temptSong);
  // }
  // async function addNewSong(){
  //   const response = await axios.post('http://127.0.0.1:8000/api/music/'):
  //   console.log(response.data);
  //   setMusic(response.data)
  // }

  return (
    <div className="App">
      <h1 className='header'>Music Library</h1>
      <DisplayMusic music={music}/>
      <button onClick={() => getAllSongs()}>Get all songs.</button>
      <h2>Add a Song</h2>
      <AddMusicForm addSong={music}/> 
    </div>
  );
}

export default App;
