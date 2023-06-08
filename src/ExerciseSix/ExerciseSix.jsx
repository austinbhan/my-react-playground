import { useEffect } from 'react';

export default function ExerciseSix() {
  // -First Exercise-
  // Replace each space within a string with %20.
  // "John Smith" => "John%20Smith"
  // if solved, turn problemOne into true
  
  function spaceToString(input) {
    const array = input.split('');
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] != ' ') {
        newArray.push(array[i]);
      }
      else if (array[i] == ' ') {
        newArray.slice(array);
        newArray.push('%20');
      } else return newArray;
    }
    console.log(newArray);
  }

  useEffect(() => {
    spaceToString('Bob and Bill');
  }, []);

  return (
    <div>
      <h2>See console log for exercise results</h2>
    </div>
  );
}
