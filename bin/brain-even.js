#!/usr/bin/env node

import runGame from '../src/engine.js';
import { DESCRIPTION, generateRound } from '../src/games/even.js';

runGame(DESCRIPTION, generateRound);
