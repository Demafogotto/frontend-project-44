import readlineSync from 'readline-sync';

const hello = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  const greeting = `Hello, ${name}!`;
  console.log(greeting);
};
export default hello;
