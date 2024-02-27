import readlineSync from 'readline-sync';

const gameEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let answer = '';
  let questionNum = 0;
  let check = 0;
  let reverseAnswer = '';
  for (let i = 0; i < 3; i += 1) {
    questionNum = Math.floor(Math.random() * 101);
    console.log(`Question: ${questionNum}`);
    answer = readlineSync.question('Your Answer: ');
    if ((questionNum % 2 === 0 && answer.toLowerCase() === 'yes') || (questionNum % 2 !== 0 && answer.toLowerCase() === 'no')) {
      console.log('Correct!');
      check += 1;
    } else {
      reverseAnswer = answer >= 'yes' ? 'no' : 'yes';
      console.log(`${answer} is wrong answer ;(. Correct answer was ${reverseAnswer}. \nLet's try again, ${name}!`);
      break;
    }
  }
  if (check === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
export default gameEven;
