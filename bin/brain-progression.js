#!/usr/bin/env node

import runGame from '../src/engine.js';
import { DESCRIPTION, generateRound } from '../src/games/progression.js';

runGame(DESCRIPTION, generateRound);
