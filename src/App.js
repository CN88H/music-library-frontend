import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import AddMusicForm from './Components/AddMusic/AddMusicForm';
import FindMusic from './Components/FindMusic/FindMusic';


function App() {

  const [music, setMusic] = useState([]);

  const [userInput, setUserInput] = useState('')

  useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/api/music/');
    console.log(response.data);
    setMusic(response.data)
  }


  return (
    <div className="App">
      <h1 className='header'>Music Library</h1>

      <FindMusic userInput={userInput} setUserInput={setUserInput}/>

      <DisplayMusic className='song_body' music={music} userInput={userInput}/>

      <button onClick={() => getAllSongs()}>Get all songs.</button>
      
      <h2>Add a Song</h2>
      <AddMusicForm addSong={music}/> 
    </div>
  );
}

export default App;
