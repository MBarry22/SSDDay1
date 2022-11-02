/*
 * File: c:\Users\jsolomon11\JBS\Courses\SSD\Intake28\Node\Lectures\Day01\HelloNode\debug-me.js
 * Created Date: Tuesday, October 18th 2022, 2:28:43 pm
 * Author: Josh Solomon
 * Copyright (c) 2022 Josh Solomon
 */
"use strict";

const title = "Debug Me";

const multiplier = (a = 7, b = 7) => {
  let result = a * b;
  console.log(`${a} * ${b} = ${result}`);
};

multiplier();
