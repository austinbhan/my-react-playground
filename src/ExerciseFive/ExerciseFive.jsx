import { useState } from 'react';
import CoverLetter from './CoverLetter';

export default function ExerciseFive() {
  const [list, setList] = useState([]);
  const [userInputOne, setUserInputOne] = useState('');
  const [userInputTwo, setUserInputTwo] = useState('');
  const [userInputThree, setUserInputThree] = useState('');
  
  function handleSubmit(e) {
    e.preventDefault();
    setList([userInputOne, userInputTwo, userInputThree]); 
  }
  
  return(
    <div>
      <h2>This is Exercise 5</h2>
      <CoverLetter 
        userInputOne = {list[0]}
        userInputTwo = {list[1]}
        userInputThree = {list[2]}/>
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

        <input placeholder="third input"
          name="third input"
          value={userInputThree}
          onChange={e => setUserInputThree(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
