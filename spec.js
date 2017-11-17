import chai from 'chai';
import BigInteger from './index';

let expect = chai.expect;

const bit64String = '18446744073709551616',
    doubled64BitString = '36893488147419103232';

const myBigNumber = new BigInteger(bit64String),
    simpleNumber = new BigInteger('12345'),
    hexNumber = new BigInteger('0x1a2b3c');

describe('Create instance and return bigIntNumber', () => {
    
    it('expect to create BigInteger class instance', () => {
        expect(myBigNumber instanceof BigInteger).to.be.true;
    });
    
    it('should return stringified bigInt', () => {
        let res = myBigNumber.getResult();
        expect(res).to.be.equal(bit64String);
    });
    
});

describe('Return sum of two numbers', () => {
    it('it should sum 2 numbers', () => {
        expect(simpleNumber.sum('98765')).to.be.equal('111110');
    });
    
    it('it should sum 2 bit64Strings', () => {
        expect(myBigNumber.sum(bit64String)).to.be.equal(doubled64BitString);
    });
});

describe('Return multiple by number', () => {
    it('it should multiple by 3', () => {
        expect(simpleNumber.multiply(3)).to.be.equal('37035');
    });
    it('it should multiple by "10"', () => {
        expect(simpleNumber.multiply('10')).to.be.equal('123450');
    });
});

describe('Return hex 2 decimal string', () => {
    it('it should convert hex string to decimal', () => {
        expect(hexNumber.getResult()).to.be.equal('1715004');
    })
});
