const http = require("http");
http
  .createServer((req, res) => {
    console.log(111)
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World\n");
  })
  .listen(3000, "127.0.0.1");
