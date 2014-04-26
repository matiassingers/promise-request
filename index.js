var Request = require('request');
var when = require('when');

// Wrap 'request' HTTP call to return promise
function request(url, json) {
  if (typeof url === 'undefined') throw new Error('undefined is not a valid url or options object.');
  json = json || false;
  
  return when.promise(function(resolve, reject) {
    Request({url:url, json:json}, function (err, res, body) {
      if (err) {
        return reject(err);
      } else if (res.statusCode !== 200) {
        err = new Error("Unexpected status code: " + res.statusCode);
        err.res = res;
        return reject(err);
      }
      resolve(body);
    });
  });
}

module.exports = request;