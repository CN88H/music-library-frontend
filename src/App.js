import React, { useState, useEffect } from 'react';
import axios from 'axios';



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
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Release Date</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
          {music.map((music, index) => {
            return (
              <tr>
                {/* <td>{index + 1}</td> */}
                <td>{music.title}</td>
                <td>{music.artist}</td>
                <td>{music.album}</td>
                <td>{music.release_date}</td>
                <td>{music.genre}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
