module.exports = function postReqHandler(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.write(JSON.stringify({ message: "Hello World from post" }));
  res.end();
};
