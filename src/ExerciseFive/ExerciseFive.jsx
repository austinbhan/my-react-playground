import { useState } from 'react';

export default function ExerciseFive() {
  const [list, setList] = useState([]);
  const [userInput, setUserInput] = useState('');

  
  function handleSubmit(e) {
    e.preventDefault();
    setList([...list, userInput]); 
  }
  
  return(
    <div>
      <h2>This is Exercise 5</h2>
      {list}
      <form onSubmit={handleSubmit}>
        <h3>Input Form</h3>
        <input placeholder="first input"
          name="first input"
          value={userInput}
          onChange={e => setUserInput(e.target.value)}
        />

        {/* Next Steps: Multiple Inputs will push into the array in order  */}


        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
