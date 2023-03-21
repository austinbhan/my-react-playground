import { useState } from 'react';
import CoverLetter from './CoverLetter';

export default function ExerciseFive() {
  const [list, setList] = useState([]);
  const [userInputOne, setUserInputOne] = useState('');
  const [userInputTwo, setUserInputTwo] = useState('');

  
  function handleSubmit(e) {
    e.preventDefault();
    setList([...list, userInputOne, userInputTwo]); 
  }
  
  return(
    <div>
      <h2>This is Exercise 5</h2>
      <CoverLetter 
        userInputOne = {list[0]}
        userInputTwo = {list[1]}/>
      <form onSubmit={handleSubmit}>
        <h3>Input Form</h3>
        <input placeholder="first input"
          name="first input"
          value={userInputOne}
          onChange={e => setUserInputOne(e.target.value)}
        />

        <input placeholder="second input"
          name="second input"
          value={userInputTwo}
          onChange={e => setUserInputTwo(e.target.value)}
        />

        {/* Next Steps: Multiple Inputs will push into the array in order  */}


        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
