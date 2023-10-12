export default function ExerciseEight() {
  
  // eslint-disable-next-line max-len
  console.log(sentenceToLetterArray('here is some code that will test out this task'));

  function sentenceToLetterArray(input) {

    const result = [];
    const splitSentence = input.split(' ');
    let i = 0;

    while (i < splitSentence.length) {
      if (splitSentence[i].charAt(3) == '') {
        result.push('false');
        i++;
      } else 
        result.push(splitSentence[i].charAt(3));
      i++;
    } 
    return result;
  }

  return (
    <div>
      <h1>Exercise 8</h1>
    </div>
  );
}
