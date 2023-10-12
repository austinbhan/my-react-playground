export default function ExerciseSeven() {

  // If it's a prime number, return true. If not prime, return false 
  // 3, 5, 7, 11, 13  == prime numbers

  function primeNumber(input) {
    // for loop
    // eslint-disable-next-line max-len
    // if input is divisible by 1, by the input, and an even number, return false
    // else return true

    for (let i = 3; i < input; i++) {
      if (input % 2 == 0) {
        return false;
      } 
      else return true;
    }
  }

  return (
    <div>
      <h1>This is Exercise Seven</h1>
    </div>
  );
}
