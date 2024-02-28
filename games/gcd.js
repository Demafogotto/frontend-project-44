import hello from '../src/cli.js';
import answerCheck from '../src/index.js';

const gameGCD = () => {
  const name = hello();
  console.log('Find the greatest common divisor of given numbers.');
  const questionNum = [];
  const correctAnswer = [];
  let randNum1 = 0;
  let randNum2 = 0;
  for (let j = 0; j < 3; j += 1) {
    randNum1 = Math.floor((Math.random() * 100) + 1);
    randNum2 = Math.floor((Math.random() * 100) + 1);
    questionNum.push(`${randNum1} ${randNum2}`);
    while (randNum2 !== 0) {
      if (randNum1 > randNum2) {
        randNum1 -= randNum2;
      } else {
        randNum2 -= randNum1;
      }
    }
    correctAnswer.push(randNum1.toString());
  }
  answerCheck(name, questionNum, correctAnswer);
};
export default gameGCD;
