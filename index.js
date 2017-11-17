class BigInteger {
    constructor (numberString) {
        this.bigIntNum = (numberString.indexOf('0x') < 0) ?
            this.parseNumberToArray(numberString) : this.parseHex2Dec(numberString);
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
    
    parseHex2Dec (hexString) {
        if (hexString.indexOf('0x') < 0) throw new Error('Input must be "0x0000" formatted');
        let cuttedHex = hexString.substring(2);
        let parsedHexArray = this.parseNumberToArray(cuttedHex);
        
        const parsedDecArray = [];
        
        parsedHexArray.reduceRight((prev, curr, index, arr) => {
            switch (curr.toLowerCase()) {
                case 'a':
                    curr = 10;
                    break;
                case 'b':
                    curr = 11;
                    break;
                case 'c':
                    curr = 12;
                    break;
                case 'd':
                    curr = 13;
                    break;
                case 'e':
                    curr = 14;
                    break;
                case 'f':
                    curr = 15;
                    break;
            }
            parsedDecArray.unshift((curr * Math.pow(16, arr.length - (index + 1))).toString());
        }, 0);
        const self = this;
        let total = parsedDecArray.reduce((prev, curr) => {
            let previous = prev.split(''),
                current = curr.split('');
            return self.sum(previous, current);
        });
        
        return total.split('');
    }
    
    sum (secondNumber, selfValue = this.bigIntNum) {
        const parsedSecond = this.parseNumberToArray(secondNumber);
        let firstArr, secondArr;
        if (parsedSecond.length > selfValue.length) {
            firstArr = parsedSecond;
            secondArr = selfValue;
        } else {
            firstArr = selfValue;
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
            
            if ((i === 0) && (memoryIncrease === 1)) resultArr.unshift(1);
        }
        
        return this.parseArrayToString(resultArr);
    }
    
    multiply (value) {
        if (typeof value === 'string') value = parseInt(value);
        if ((typeof value !== 'number') && (typeof value !== 'string')) throw new Error('Multiplier must be number or string');
        let multipliedString = '0';
        for (let i = 1; i <= value; i++) {
            multipliedString = this.sum(multipliedString);
        }
        return multipliedString;
    }
    
    getResult () {
        return this.bigIntNum.join('');
    }
}

module.exports = BigInteger;