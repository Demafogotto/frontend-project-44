import hello from '../src/cli.js';
import answerCheck from '../src/index.js';

const gameProgression = () => {
  const name = hello();
  console.log('What number is missing in the progression?');
  const questionNum = [];
  const correctAnswer = [];
  let randLength = 0;
  let randStart = 0;
  let randIndex = 0;
  let randProg = 0;
  let bodyProgression = [];
  for (let j = 0; j < 3; j += 1) {
    randLength = Math.floor((Math.random() * 10) + 5);
    randStart = Math.floor((Math.random() * 100) + 1);
    randIndex = Math.floor((Math.random() * (randLength - 1)) + 1);
    randProg = Math.floor((Math.random() * 5) + 2);
    bodyProgression = [];
    for (let n = 0; n < randLength; n += 1) {
      bodyProgression.push(randStart + (n * randProg));
    }
    correctAnswer.push(bodyProgression[randIndex].toString());
    bodyProgression[randIndex] = '..';
    questionNum.push(bodyProgression.join(' '));
  }
  answerCheck(name, questionNum, correctAnswer);
};
export default gameProgression;
