import SongPresenter from "../SongPresenter/SongPresenter";


const DisplayMusic = (props) => {
    return ( 
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
            {props.music.map((song) => <SongPresenter  key={song.id} song={song}/>)}
        </tbody>
        </table>
     );
}
 
export default DisplayMusic;