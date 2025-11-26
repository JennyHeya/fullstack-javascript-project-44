#!/usr/bin/env node

import runGame from '../src/engine.js';
import { DESCRIPTION, generateRound } from '../src/games/calc.js';

runGame(DESCRIPTION, generateRound);
