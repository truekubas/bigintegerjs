class BigInteger {
    constructor(number) {
        this.number = number.toString();
        this.parsedNumber = this.number.split('');
    }
    getResult() {
        return this.parsedNumber.join();
    }
}

module.exports = BigInteger;