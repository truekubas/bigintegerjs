class BigInteger {
    constructor (numberString) {
        this.bigIntNum = this.parseNumberToArray(numberString);
    }
    
    parseNumberToArray (n) {
        if (typeof n === 'number') throw new Error('Input value must be string');
        if (typeof n === 'string') return n.split('');
        if (Array.isArray(n)) return n;
    }
    
    parseArrayToString (arr) {
        if (typeof arr === 'string') return arr;
        if (Array.isArray(arr)) return arr.join('');
    }
    
    sum (secondNumber) {
        const parsedSecond = this.parseNumberToArray(secondNumber);
        let firstArr, secondArr;
        if (parsedSecond.length > this.bigIntNum.length) {
            firstArr = parsedSecond;
            secondArr = this.bigIntNum;
        } else {
            firstArr = this.bigIntNum;
            secondArr = parsedSecond;
        }
        
        let fillArr = new Array(firstArr.length - secondArr.length).fill(0);
        secondArr.unshift(...fillArr);
        
        let resultArr = [],
            memoryIncrease = 0,
            tempSum;
        
        for (let i = firstArr.length - 1; i >= 0; i--) {
            tempSum = parseInt(firstArr[i]) + parseInt(secondArr[i] || 0) + memoryIncrease;
            if (tempSum >= 10) {
                tempSum = tempSum - 10;
                memoryIncrease = 1;
            } else {
                memoryIncrease = 0;
            }
            resultArr.unshift(tempSum);
        }
        
        return this.parseArrayToString(resultArr);
    }
    
    getResult () {
        return this.bigIntNum.join('');
    }
}

module.exports = BigInteger;