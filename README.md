# BigIntegerJs
Safe manipulating with large integers (rather than 32bits)

[![npm version](https://badge.fury.io/js/bigintegerjs.svg)](https://badge.fury.io/js/bigintegerjs)

Made with ES6 and love <3

## Usage
All input values must be strings!

### Install
```
npm install bigintegerjs
```
or
```
yarn add bigintegerjs
```

### Init
```
var BigInteger = require("bigintegerjs");
var newInt  = new BigInteger('1234567890123456789012345678');
```
### Sum
```
newInt.sum('1'); -> "1234567890123456789012345679"
```
### Multiply
```
newInt.multiply(2); -> "2469135780246913578024691356" // input can be Number or String 
```
### Testing
```
npm run test
```
