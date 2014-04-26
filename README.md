# promise-request
> Simple promise wrapper for [`request`](https://github.com/mikeal/request)
[![NPM version](https://badge.fury.io/js/promise-request.svg)](https://www.npmjs.org/package/promise-request)

## Installation

```shell
$ npm install promise-request
```
## Usage

**request(url, json)**
- `url`(`string`) - the target url
- `json`(`boolean`) - parses the body as JSON

```js
var url = "http://restcountries.eu/rest/v1/alpha/dk";
request(url, true)
    .then(handleCountryData)
    .catch(console.error);
```