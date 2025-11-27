import getRandomInt from '../utils.js';

const DESCRIPTION = 'Find the greatest common divisor of given numbers.'

const gcd = (num1, num2) => {
  let a = num1
  let b = num2
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a;
};

const generateRound = () => {
  const num1 = getRandomInt(1, 100)
  const num2 = getRandomInt(1, 100)
  const question = `${num1} ${num2}`
  const correctAnswer = String(gcd(num1, num2))
  return { question, correctAnswer }
};

export { DESCRIPTION, generateRound }
