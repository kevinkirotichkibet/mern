const { logEvents } = require("./logger");

const errorHandler = (err, req, res, next) => {
  logEvents(
    `${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`,
    "errLog.log"
  );
  console.log(err.stack);

  const status = res.status ? res.status : 500; // server error

  res.status(status);

  res.json(err.message);
};


module.exports = errorHandler;
