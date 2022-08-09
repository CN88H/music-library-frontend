import React, { useState, useEffect } from 'react';
import axios from 'axios';



const AddMusicForm = (addSong) => {

    const [title, setTitle] = useState([]);
    const [artist, setArtist] = useState([]);
    const [album, setAlbum] = useState([]);
    const [release_date, setReleaseDate] = useState([]);
    const [genre, setGenre] = useState([]);



    async function handleSubmit(event) {
        // event.preventDefault();
        // let newSong = {
        //     title: title,
        //     artist: artist,
        //     album: album,
        //     releaseDate: releaseDate,
        //     genre: genre
        // };
        // console.log(newSong)
        // addSong.addNewSong(newSong)

        event.preventDefault();
        const response = {title, artist, album, release_date, genre};

        fetch('http://127.0.0.1:8000/api/music/', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(response)
        })
        
        // await axios.post('http://127.0.0.1:8000/api/music/');
        // console.log(response);
    }




    
    return ( 
        <form onSubmit={handleSubmit}>
            <label>title</label>
            <input type='letter' value={title} onChange={(event) => setTitle(event.target.value)}/>
            <label>artist</label>
            <input type='letter' value={artist} onChange={(event) => setArtist(event.target.value)}/>
            <label>album</label>
            <input type='letter' value={album} onChange={(event) => setAlbum(event.target.value)}/>
            <label>release_date</label>
            <input type='date' value={release_date} onChange={(event) => setReleaseDate(event.target.value)}/>
            <label>genre</label>
            <input type='letter' value={genre} onChange={(event) => setGenre(event.target.value)}/>
            <button type='submit'>Add</button>
        </form>
     );
}
 
export default AddMusicForm;