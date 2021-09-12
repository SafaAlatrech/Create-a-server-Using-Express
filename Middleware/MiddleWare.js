//Simple request time logger
const myLogger = function (req, res, next) {
    console.log("A new request received at " + Date.now());
     next();
  }

