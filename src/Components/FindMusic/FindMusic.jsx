import React from 'react';



const FindMusic = (props) => {
  


    return (
        <form>
            <label>Search For Song</label>
            <input type='text' value={props.userInput} onChange={(event) => props.setUserInput(event.target.value)}/>
            <button type='submit'>Search</button>
        </form> 
     );
}
 
export default FindMusic;