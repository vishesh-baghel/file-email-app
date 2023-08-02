const getReqHandler = require("./methods/get-request");
const postReqHandler = require("./methods/post-request");
const data = require("./db.json");
const http = require("http");
const port = process.env.PORT || 5001;

const putReqHandler = (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.write(JSON.stringify({ message: "Hello World from put" }));
  res.end();
};

const deleteReqHandler = (req, res) => {
  res.statusCode = 404;
  res.setHeader("Content-Type", "application/json");
  res.write(JSON.stringify({ message: "Route not found" }));
  res.end();
};

const server = http.createServer((req, res) => {
  req.data = data;
  switch (req.method) {
    case "GET":
      getReqHandler(req, res);
      break;
    case "POST":
      postReqHandler(req, res);
      break;
    case "PUT":
      putReqHandler(req, res);
      break;
    case "DELETE":
      deleteReqHandler(req, res);
      break;
    default:
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify({ message: "Hello World from default" }));
      res.end();
  }
});

server.listen(port, () => {
  console.log(`Server running at port for you ` + port);
});
