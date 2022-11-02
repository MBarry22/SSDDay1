// Set strict mode
"use strict";

// Load the core HTTP module so we can set up server
const http = require("http");

// Load fs so we can interact with file system and load/serve html from files on disk
// We want the promises version so we can use .then and .catch when loading our static profile HTML
const fs = require("fs").promises;

// hostname and port are needed in order for the http server to listen for requests
const hostname = "127.0.0.1";
const port = process.env.PORT || 3000;

// Initialize our server
const server = http.createServer((req, res) => {
  fs.readFile(__dirname + "/data/products.json")
    .then((contents) => {
      console.log(contents);
      // need to parse the raw buffer as json if we want to work with it
      const productsJson = JSON.parse(contents);
      console.log(productsJson);
      //   prepare and send an OK response
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(productsJson));
    })
    .catch((err) => {
      res.writeHead(500);
      res.end(err);
    });
});

// Start the HTTP server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
