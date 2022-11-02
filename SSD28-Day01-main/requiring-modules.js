// load the http module
const http = require("http");

// load our custom copyright function from an external module
const { generateCopyright } = require("./utils/utils");

// variables that the server will need
const hostname = "127.0.0.1";
const port = 3000;

// pass in our request handling callback to createServer
const server = http.createServer((req, res) => {
  // prepare and send an OK response
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  const copyright = generateCopyright("Josh Solomon");
  res.end(`<h1>Hello Node Server</h1><footer>${copyright}</footer>`);
});

// register the server to listen for requests
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
