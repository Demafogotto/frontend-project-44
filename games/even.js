import hello from '../src/cli.js';
import answerCheck from '../src/index.js';

const gameEven = () => {
  const name = hello();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const questionNum = [];
  const correctAnswer = [];
  for (let j = 0; j < 3; j += 1) {
    questionNum.push(Math.floor(Math.random() * 101));
    correctAnswer.push(questionNum[j] % 2 === 0 ? 'yes' : 'no');
  }
  answerCheck(name, questionNum, correctAnswer);
};
export default gameEven;
