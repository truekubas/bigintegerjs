# BigIntegerJs
Safe manipulating with large integers (rather than 32bits)

Made with ES6 and love <3

## Usage
All input values must be strings!

### Init
```
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