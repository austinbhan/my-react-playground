export default function ExerciseSeven() {

  
  function getSum(inp1, inp2) {
    // Add two numbers
    // [2,4,3], [5,6,4] = [7,0,8]
    
    // -How does this work?-
  
    // Example 1
    // [2,4,3], [5,6,4] into
    // 243 + 564
    // = 807
    // into [8,0,7]
    // reverse into
    // [7,0,8]
  
    // Example 2
    // [9,9,9,9,9,9,9], [9,9,9,9] into
    // 9999999 + 9999
    // = 10009998
    // into [1,0,0,0,9,9,9,8] 
    // reverse into
    // [8,9,9,9,0,0,0,1]

    // Example 3
    // [5,4,2], [2,1,5]
    // Convert each input into number by...
    // for inp, crunch into number
    // then repeat for second
    // forEach       
      
    // inp1 = [5,4,2]
    const num1 = inp1.reduce((accum, digit) => (accum * 10) + digit, 0);

    // inp2 = [2,1,5]
    const num2 = inp2.reduce((accum, digit) => (accum * 10) + digit, 0);
    
    const sum = num1 + num2; 

    const tempArray = '' + sum;
    const sumArray = [...tempArray].reduce((acc, n) =>  acc.concat(+n), []);

    const finalArray = sumArray.reverse();

    console.log(finalArray);
  }

  // eslint-disable-next-line max-len
  // Given to different lists of integers, write a function that returns intersection

  // If [1,2,2,3] and [2,2,3,4], return [2,2,3]
  // If [2,2,4,6,7] and [1,2,2,4] return [2,2,4]

  function intersection(arr1, arr2) {
    // Create const commonArray = [];
    const commonArray = [];

    // Make a loop from the first array index [0], i = array index
    const arr2Index = 0;

    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] != arr2[0]) {
        arr2[arr2Index + 1];
      } else if (arr2[i] == arr2[arr2Index]) {
        commonArray.push(arr1[i]);
      } else return; 
    }
    // Check first array index with second array index
    // If arr1[i] does not equal arr2[0], increment arr2 by arr2[1++]
    // eslint-disable-next-line max-len
    // else if arr1[i] equals arr2[1++], push value onto commonArray, increment arr1
    // else return commonArray

    console.log(commonArray);
  }

  intersection([1, 2, 2, 3], [2, 2, 3, 4]);


  return (
    <div>
      <h1>This is Exercise Seven</h1>
    </div>
  );
}
