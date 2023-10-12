export default function ExerciseEight() {
  
  // eslint-disable-next-line max-len
  console.log(sentenceToLetterArray('here is some code that will test out this task'));

  function sentenceToLetterArray(input) {

    const result = [];
    const splitSentence = input.split(' ');

    for (let i = 0; i < splitSentence.length; i++) {
      if (splitSentence[i].charAt(3) == '') {
        result.push('false');
      } else 
        result.push(splitSentence[i].charAt(3));
    } 
    return result;
  }


  return (
    <div>
      <h1>Exercise 8</h1>
    </div>
  );
}
