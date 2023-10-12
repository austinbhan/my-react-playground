export default function ExerciseSix() {

  // -First Exercise-
  // Replace each space within a string with %20.
  // "John Smith" => "John%20Smith"
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
    return newArray;
  }

  // -Second Exercise-
  // Check if string is a permutation of a palindrome
  // If 'tact coa' return true
  // because 'taco cat' and 'atco cta' are a permutation and palindrome


  return (
    <div>
      <h2>See console log for exercise results</h2>
      Line 31: {spaceToString('Bob and Bill')};
    </div>
  );
}
