// load the http module
const http = require("http");

// variables that the server will need
const hostname = "127.0.0.1";
const port = 3000;

// pass in our request handling callback to createServer
const server = http.createServer((req, res) => {
  // prepare and send an OK response
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello Node Server");
});

// register the server to listen for requests
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
