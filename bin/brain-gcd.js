#!/usr/bin/env node

import runGame from '../src/engine.js';
import { DESCRIPTION, generateRound } from '../src/games/gcd.js';

runGame(DESCRIPTION, generateRound);
