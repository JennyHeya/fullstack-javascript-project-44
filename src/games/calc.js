import getRandomInt from '../utils.js'

const DESCRIPTION = 'What is the result of the expression?'

const OPERATIONS = ['+', '-', '*']

const calculate = (a, b, op) => {
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error(`Unknown operation: ${op}`)
  }
}

const generateRound = () => {
  const num1 = getRandomInt(1, 30)
  const num2 = getRandomInt(1, 30)
  const operation = OPERATIONS[getRandomInt(0, OPERATIONS.length - 1)]

  const question = `${num1} ${operation} ${num2}`
  const correctAnswer = String(calculate(num1, num2, operation))

  return { question, correctAnswer }
}

export { DESCRIPTION, generateRound }
