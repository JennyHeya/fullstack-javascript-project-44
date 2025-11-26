import getRandomInt from '../utils.js';

const DESCRIPTION = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const generateRound = () => {
  const length = getRandomInt(5, 11);
  const start = getRandomInt(1, 50);
  const step = getRandomInt(2, 7);
  const hiddenIndex = getRandomInt(0, length - 1);

  const progression = generateProgression(start, step, length);
  const correctAnswer = String(progression[hiddenIndex]);

  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return { question, correctAnswer };
};

export { DESCRIPTION, generateRound };
