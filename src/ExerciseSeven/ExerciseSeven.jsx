export default function ExerciseSeven() {

  // If it's a prime number, return true. If not prime, return false 
  // Prime numbers = 2,3,5,7,11,13
  function primeNumber(input) {
    if (input <= 1) { // because 0 and 1 are prime numbers
      return false;
    }
    if (input === 2) { // because 2 is not a prime number 
      return true;
    }

    for (let i = 2; i < input; i++) {
      if (input % i === 0) { // if input divided by number gives a remainder of 0;
        return false; // return false, it's not a prime number
      }
    } return true; // else return true, it is a prime number
  }

  console.log(primeNumber(9));


  return (
    <div>
      <h1>This is Exercise Seven</h1>
    </div>
  );
}
