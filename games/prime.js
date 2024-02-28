import hello from '../src/cli.js';
import answerCheck from '../src/index.js';

const gamePrime = () => {
  const name = hello();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const questionNum = [];
  const correctAnswer = [];
  let primeAnswer = 'yes';
  let randNum = 0;
  for (let j = 0; j < 3; j += 1) {
    primeAnswer = 'yes';
    randNum = Math.floor((Math.random() * 100) + 1);
    questionNum.push(randNum);
    for (let n = 2, s = Math.sqrt(randNum); n <= s; n += 1) {
      if (randNum % n === 0 || randNum === 1) {
        primeAnswer = 'no';
      }
    }
    correctAnswer.push(primeAnswer);
  }
  answerCheck(name, questionNum, correctAnswer);
};
export default gamePrime;
