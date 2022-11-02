/*
 * File: c:\Users\jsolomon11\JBS\Courses\SSD\Intake28\Node\Lectures\Day01\HelloNode\args.js
 * Created Date: Tuesday, October 18th 2022, 1:29:00 pm
 * Author: Josh Solomon
 * Copyright (c) 2022 Josh Solomon
 */

"use strict";

// inspect process.argv
// console.log(process.argv);

const program = process.argv[0];
const file = process.argv[1];
const userArg = process.argv[2];

console.log(program, file, userArg);
