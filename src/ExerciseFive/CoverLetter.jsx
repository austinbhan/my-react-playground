export default function CoverLetter({ userInputOne, 
  userInputTwo, userInputThree }) {
  return (
    <div className="cover-letter">
      <p>This is a trial of the cover letter exercise:
        {userInputOne}, {userInputTwo}, {userInputThree}
      </p>
    </div>
  );
}
