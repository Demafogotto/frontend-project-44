import readlineSync from 'readline-sync';

const answerCheck = (name, questionNum, correctAnswer) => {
  let userAnswer = '';
  for (let i = 0; i < 3; i += 1) {
    console.log(`Question: ${questionNum[i]}`);
    userAnswer = readlineSync.question('Your Answer: ');
    if (userAnswer.toLowerCase() === correctAnswer[i]) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer[i]}. \nLet's try again, ${name}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
export default answerCheck;
