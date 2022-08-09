import React from 'react';



const FindMusic = (props) => {
  


    return ( 
        <input type='text' value={props.userInput} onChange={(event) => props.setUserInput(event.target.value)}/>
     );
}
 
export default FindMusic;