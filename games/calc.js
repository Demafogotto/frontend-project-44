import hello from '../src/cli.js';
import answerCheck from '../src/index.js';

const gameCalc = () => {
  const name = hello();
  console.log('What is the result of the expression?');
  const questionNum = [];
  const correctAnswer = [];
  const operations = ['+', '-', '*'];
  let randNum1 = 0;
  let randNum2 = 0;
  let randOperator = '';
  let answerCalc = 0;
  for (let j = 0; j < 3; j += 1) {
    randNum1 = Math.floor((Math.random() * 100) + 1);
    randNum2 = Math.floor((Math.random() * 100) + 1);
    randOperator = operations[Math.floor(Math.random() * 3)];
    questionNum.push(`${randNum1} ${randOperator} ${randNum2}`);
    switch (randOperator) {
      case '+': answerCalc = randNum1 + randNum2; break;
      case '-': answerCalc = randNum1 - randNum2; break;
      case '*': answerCalc = randNum1 * randNum2; break;
      default: break;
    }
    correctAnswer.push(answerCalc.toString());
  }
  answerCheck(name, questionNum, correctAnswer);
};
export default gameCalc;
