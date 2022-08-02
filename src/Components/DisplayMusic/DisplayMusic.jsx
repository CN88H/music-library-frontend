
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
            {props.parentEntries.map((music, index) => {
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
     );
}
 
export default DisplayMusic;