import getRandomInt from '../utils.js'

const DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".'

const isEven = (num) => num % 2 === 0

const generateRound = () => {
  const question = getRandomInt(1, 100)
  const correctAnswer = isEven(question) ? 'yes' : 'no'
  return { question, correctAnswer }
}

export { DESCRIPTION, generateRound }
