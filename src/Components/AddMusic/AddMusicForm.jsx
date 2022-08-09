import React, { useState } from 'react';



const AddMusicForm = (addSong) => {

    const [title, setTitle] = useState([]);
    const [artist, setArtist] = useState([]);
    const [album, setAlbum] = useState([]);
    const [releaseDate, setReleaseDate] = useState([]);
    const [genre, setGenre] = useState([]);

    return ( 
        <form>
            <label>Title</label>
            <input type='letter' value={title} onChange={(event) => setTitle(event.target.value)}/>
            <label>Artist</label>
            <input type='letter' value={artist} onChange={(event) => setArtist(event.target.value)}/>
            <label>Album</label>
            <input type='letter' value={album} onChange={(event) => setAlbum(event.target.value)}/>
            <label>Release Date</label>
            <input type='date' value={releaseDate} onChange={(event) => setReleaseDate(event.target.value)}/>
            <label>Genre</label>
            <input type='letter' value={genre} onChange={(event) => setGenre(event.target.value)}/>
            <button type='submit'>Add</button>
        </form>
     );
}
 
export default AddMusicForm;