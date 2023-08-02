module.exports = function getReqHandler(req, res) {
  const baseURL = req.url.substring(0, req.url.lastIndexOf("/") + 1);
  console.log("base", baseURL);
  const param = req.url.split("/")[2];
  console.log("param", param);

  if (req.url === "/emails") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(req.data));
    res.end();
  }

  if (param && baseURL === "/emails/") {
    const emailId = param;
    const email = req.data.find((email) => email.id === emailId);
    if (email) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify(email));
      res.end();
    }
  }

  res.statusCode = 404;
  res.setHeader("Content-Type", "application/json");
  res.write(JSON.stringify({ message: "some shit happend" }));
  res.end();
};
