// Set strict mode
"use strict";

exports.generateCopyright = (author) => {
  return `&copy; ${new Date().getFullYear()} ${author}`;
};
